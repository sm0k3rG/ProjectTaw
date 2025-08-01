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
  const topVentas = await this.prisma.lineaDePedido.groupBy({
    by: ['productoId'],
    _sum: { cantidad: true },
    orderBy: { _sum: { cantidad: 'desc' } },
    take: 10,
  });

  const productoIds = topVentas.map(item => item.productoId);
  const productos = await this.prisma.producto.findMany({
    where: { id: { in: productoIds } }
  });

  return topVentas.map(item => {
    const prod = productos.find(p => p.id === item.productoId);
    return {
      producto: prod ? prod.nombre : 'Desconocido',
      cantidad: item._sum.cantidad
    };
  });
}


 async productosMenosVendidos() {
  const menosVentas = await this.prisma.lineaDePedido.groupBy({
    by: ['productoId'],
    _sum: { cantidad: true },
    orderBy: { _sum: { cantidad: 'asc' } },
    take: 10,
  });

  const productoIds = menosVentas.map(item => item.productoId);
  const productos = await this.prisma.producto.findMany({
    where: { id: { in: productoIds } }
  });

  return menosVentas.map(item => {
    const prod = productos.find(p => p.id === item.productoId);
    return {
      producto: prod ? prod.nombre : 'Desconocido',
      cantidad: item._sum.cantidad
    };
  });
}

}
