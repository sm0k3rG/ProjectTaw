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

  // Crear un nuevo pedido
  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
  const { usuarioId, direccionId, lineasDePedido } = createPedidoDto;

  // Obtener el usuario y la dirección
  const usuario = await this.prisma.usuario.findUnique({
    where: { id: usuarioId },
  });
  const direccion = await this.prisma.direccion.findUnique({
    where: { id: direccionId },
  });

  if (!usuario || !direccion) {
    throw new Error('Usuario o dirección no encontrados');
  }

  // Calcular el total del pedido y los precios unitarios de las líneas de pedido
  const lineasConTotales = await Promise.all(lineasDePedido.map(async (linea) => {
    // Obtener el precio unitario del producto
    const producto = await this.prisma.producto.findUnique({
      where: { id: linea.productoId },
    });

    if (!producto) {
      throw new Error(`Producto con ID ${linea.productoId} no encontrado`);
    }

    // Calcular el total de la línea de pedido
    const totalLinea = producto.precio * linea.cantidad; // Total por línea = precio unitario * cantidad
    return {
      ...linea,
      precioUnitario: producto.precio,
      total: totalLinea,
    };
  }));

  // Calcular el total general del pedido
  const totalPedido = lineasConTotales.reduce((acc, linea) => acc + linea.total, 0);

  // Crear el pedido
  const pedido = await this.prisma.pedido.create({
    data: {
      usuarioId,
      direccionId,
      estado: 'PENDIENTE',  // Estado inicial
      fechaPedido: new Date(),  // Fecha actual
      total: totalPedido, // Asignar el total del pedido
      lineasDePedido: {
        create: lineasConTotales.map((linea) => ({
          productoId: linea.productoId,
          cantidad: linea.cantidad,
          precioUnitario: linea.precioUnitario,
          total: linea.total,
        })),
      },
    },
    include: {
      usuario: true,
      direccion: true,
      lineasDePedido: true,
    },
  });
  await this.notificationsService.notificarCreacionPedido(
  pedido.usuario.email,
  pedido.id,
  pedido.total,
);
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