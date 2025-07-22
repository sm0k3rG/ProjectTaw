import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  // Asegúrate de que PrismaService esté importado correctamente
import { Pedido, LineaDePedido, Usuario, Direccion } from '@prisma/client';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService,
    private notificationsService: NotificationsService
  ) {}
  async obtenerPedidosDelUsuario(usuarioId: number) {
    const pedidos = await this.prisma.pedido.findMany({
      where: { usuarioId },
      orderBy: { fechaPedido: 'desc' },
      include: {
        direccion: true,
        lineasDePedido: {
          include: {
            producto: true,
          },
        },
      },
    });

    if (!pedidos.length) {
      throw new NotFoundException('No se encontraron pedidos para este usuario.');
    }

    return pedidos;
  }

 async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
  const { usuarioId, direccionId, lineasDePedido } = createPedidoDto;

  // Verificar usuario y dirección
  const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
  const direccion = await this.prisma.direccion.findUnique({ where: { id: direccionId } });

  if (!usuario || !direccion) {
    throw new Error('Usuario o dirección no encontrados');
  }

  // Preparar líneas de pedido con precio final
  const lineasConTotales = await Promise.all(
    lineasDePedido.map(async (linea) => {
      const producto = await this.prisma.producto.findUnique({
        where: { id: linea.productoId },
        include: { oferta: true },
      });

      if (!producto) {
        throw new Error(`Producto con ID ${linea.productoId} no encontrado`);
      }

      let precioFinal = producto.precio;

      if (producto.oferta) {
        const descuento = producto.precio * (producto.oferta.porcentaje / 100);
        precioFinal = +(producto.precio - descuento).toFixed(2);
      }

      return {
        productoId: linea.productoId,
        cantidad: linea.cantidad,
        precioUnitario: precioFinal,
      };
    })
  );

  // Calcular total del pedido
  const totalPedido = lineasConTotales.reduce(
    (acc, linea) => acc + linea.precioUnitario * linea.cantidad,
    0
  );

  // Crear el pedido
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
        })),
      },
    },
    include: {
      usuario: true,
      direccion: true,
      lineasDePedido: true,
    },
  });

  // ✅ Enviar notificación por correo
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
  const pedido = await this.prisma.pedido.findUnique({
    where: { id: pedidoId },
  });

  if (!pedido) {
    throw new NotFoundException('El pedido no existe.');
  }

  if (pedido.usuarioId !== usuarioId) {
    throw new ForbiddenException('No puedes cancelar un pedido que no te pertenece.');
  }

  if (pedido.estado === 'CANCELADO' || pedido.estado === 'COMPLETADO') {
    throw new ForbiddenException('No se puede cancelar este pedido.');
  }

  const pedidoCancelado = await this.prisma.pedido.update({
    where: { id: pedidoId },
    data: {
      estado: 'CANCELADO',
    },
  });

  return pedidoCancelado;
}

async cancelarPedidoAdmin(pedidoId: number) {
  const pedido = await this.prisma.pedido.findUnique({
    where: { id: pedidoId },
  });

  if (!pedido) {
    throw new NotFoundException('El pedido no existe.');
  }

  if (pedido.estado === 'CANCELADO' || pedido.estado === 'COMPLETADO') {
    throw new ForbiddenException('No se puede cancelar este pedido.');
  }

  const pedidoCancelado = await this.prisma.pedido.update({
    where: { id: pedidoId },
    data: {
      estado: 'CANCELADO',
    },
  });

  return pedidoCancelado;
}

}