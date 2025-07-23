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
    return this.prisma.lineaDePedido.groupBy({
      by: ['productoId'],
      _sum: { cantidad: true },
      orderBy: { _sum: { cantidad: 'desc' } },
      take: 10,
    });
  }

  async productosMenosVendidos() {
    return this.prisma.lineaDePedido.groupBy({
      by: ['productoId'],
      _sum: { cantidad: true },
      orderBy: { _sum: { cantidad: 'asc' } },
      take: 10,
    });
  }
}
