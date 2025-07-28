import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EstadisticasService {
  constructor(private readonly prisma: PrismaService) {}

  async cantidadVentasTotales() {
    return this.prisma.pedido.count({ where: { estado: 'COMPLETADO' } });
  }


  async cantidadUsuarios() {
    return this.prisma.usuario.count();
  }

  async productosMasVendidos() {
  const topProductos = await this.prisma.lineaDePedido.groupBy({
    by: ['productoId'],
    _sum: { cantidad: true },
    orderBy: { _sum: { cantidad: 'desc' } },
    take: 10,
  });

  const productosIds = topProductos.map(p => p.productoId);

  const productos = await this.prisma.producto.findMany({
    where: { id: { in: productosIds } },
    select: { id: true, nombre: true }
  });

  // Unir datos por productoId
  return topProductos.map(item => {
    const producto = productos.find(p => p.id === item.productoId);
    return {
      productoId: item.productoId,
      nombre: producto?.nombre || 'Desconocido',
      cantidadVendida: item._sum.cantidad
    };
  });
}


  async productosMenosVendidos() {
  const bottomProductos = await this.prisma.lineaDePedido.groupBy({
    by: ['productoId'],
    _sum: { cantidad: true },
    orderBy: { _sum: { cantidad: 'asc' } },
    take: 10,
  });

  const productosIds = bottomProductos.map(p => p.productoId);

  const productos = await this.prisma.producto.findMany({
    where: { id: { in: productosIds } },
    select: { id: true, nombre: true }
  });

  return bottomProductos.map(item => {
    const producto = productos.find(p => p.id === item.productoId);
    return {
      productoId: item.productoId,
      nombre: producto?.nombre || 'Desconocido',
      cantidadVendida: item._sum.cantidad
    };
  });
}

}
