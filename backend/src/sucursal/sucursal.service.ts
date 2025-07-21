// src/sucursal/sucursal.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SucursalService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerSucursalesCercanas(usuarioId: number) {
    const direccionUsuario = await this.prisma.direccion.findFirst({
      where: { usuarioId },
    });

    if (!direccionUsuario) {
      throw new NotFoundException('El usuario no tiene direcciones registradas');
    }

    const sucursales = await this.prisma.sucursal.findMany({
      where: {
        region: direccionUsuario.region,
        ciudad: direccionUsuario.comuna, // si quieres filtrar también por comuna
      },
    });

    return sucursales;
  }
}
