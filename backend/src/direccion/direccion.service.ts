import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDireccionDto } from '../auth/dto/update-direccion.dto';


@Injectable()
export class DireccionService {
  constructor(private prisma: PrismaService) {}

  async actualizarDireccion(id: number, dto: UpdateDireccionDto) {
    const direccion = await this.prisma.direccion.findUnique({ where: { id } });
    if (!direccion) throw new NotFoundException('Dirección no encontrada');

    return this.prisma.direccion.update({
      where: { id },
      data: dto,
    });
  }

  async eliminarDireccion(id: number) {
    const direccion = await this.prisma.direccion.findUnique({ where: { id } });
    if (!direccion) throw new NotFoundException('Dirección no encontrada');

    return this.prisma.direccion.delete({ where: { id } });
  }
}
