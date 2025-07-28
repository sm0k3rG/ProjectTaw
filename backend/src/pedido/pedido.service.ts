import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pedido, LineaDePedido, Usuario, Direccion } from '@prisma/client';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class PedidoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async verPedidoPropio(
    pedidoId: number,
    usuarioId: number,
  ): Promise<Pedido> {
    const pedido = await this.prisma.pedido.findFirst({
      where: { id: pedidoId, usuarioId },
      include: {
        usuario: true,
        direccion: true,
        lineasDePedido: {
          include: {
            producto: {
              include: { oferta: true },
            },
          },
        },
      },
    });

    if (!pedido) {
      throw new NotFoundException(
        `Pedido ${pedidoId} no encontrado para el usuario ${usuarioId}`,
      );
    }

    return pedido;
  }

  async crearPedido(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const { usuarioId, direccionId, lineasDePedido } = createPedidoDto;

    // Verificar usuario y dirección
    const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
    const direccion = await this.prisma.direccion.findUnique({ where: { id: direccionId } });

    if (!usuario || !direccion) {
      throw new NotFoundException('Usuario o dirección no encontrados');
    }

    // Preparar líneas con precio final y total
    const lineasConTotales = await Promise.all(
      lineasDePedido.map(async (linea) => {
        const producto = await this.prisma.producto.findUnique({
          where: { id: linea.productoId },
          include: { oferta: true },
        });
        if (!producto) {
          throw new NotFoundException(`Producto con ID ${linea.productoId} no encontrado`);
        }

        let precioFinal = producto.precio;
        if (producto.oferta) {
          const descuento = producto.precio * (producto.oferta.porcentaje / 100);
          precioFinal = +(producto.precio - descuento).toFixed(2);
        }

        const totalLinea = precioFinal * linea.cantidad;

        return {
          productoId: linea.productoId,
          cantidad: linea.cantidad,
          precioUnitario: precioFinal,
          total: totalLinea,
        };
      }),
    );

    // Calcular total del pedido
    const totalPedido = lineasConTotales.reduce(
      (acc, linea) => acc + linea.total,
      0,
    );

    // Crear el pedido con líneas anidadas
    const pedido = await this.prisma.pedido.create({
      data: {
        usuarioId,
        direccionId,
        estado: 'PENDIENTE',
        fechaPedido: new Date(),
        total: totalPedido,
        lineasDePedido: {
          create: lineasConTotales.map((linea) => ({
            productoId: linea.productoId,
            cantidad: linea.cantidad,
            precioUnitario: linea.precioUnitario,
            total: linea.total,             // <-- agregado
          })),
        },
      },
      include: {
        usuario: true,
        direccion: true,
        lineasDePedido: true,
      },
    });

    // Enviar notificación por correo
    try {
      await this.notificationsService.notificarCreacionPedido(
        usuario.email,
        pedido.id,
        pedido.total,
      );
    } catch (error) {
      console.error('❌ No se pudo enviar el correo de notificación:', error);
    }

    return pedido;
  }

  async cancelarPedidoPropio(pedidoId: number, usuarioId: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id: pedidoId } });
    if (!pedido) {
      throw new NotFoundException('El pedido no existe.');
    }
    if (pedido.usuarioId !== usuarioId) {
      throw new ForbiddenException('No puedes cancelar un pedido que no te pertenece.');
    }
    if (['CANCELADO', 'COMPLETADO'].includes(pedido.estado)) {
      throw new ForbiddenException('No se puede cancelar este pedido.');
    }
    return this.prisma.pedido.update({
      where: { id: pedidoId },
      data: { estado: 'CANCELADO' },
    });
  }

  async cancelarPedidoAdmin(pedidoId: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id: pedidoId } });
    if (!pedido) {
      throw new NotFoundException('El pedido no existe.');
    }
    if (['CANCELADO', 'COMPLETADO'].includes(pedido.estado)) {
      throw new ForbiddenException('No se puede cancelar este pedido.');
    }
    return this.prisma.pedido.update({
      where: { id: pedidoId },
      data: { estado: 'CANCELADO' },
    });
  }

  async verPedidosRegistrados(): Promise<Pedido[]> {
    return this.prisma.pedido.findMany({
      include: {
        usuario: true,
        direccion: true,
        lineasDePedido: {
          include: {
            producto: {
              include: { oferta: true },
            },
          },
        },
      },
    });
  }
}