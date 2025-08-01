// src/direccion/direccion.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDireccionDto } from './dto/create-direccion.dto';

@Injectable()
export class DireccionService {
  constructor(private prisma: PrismaService) {}

  async create(createDireccionDto: CreateDireccionDto) {
    const { usuarioId, calle, numero, comuna, region } = createDireccionDto;

    // Verificar que el usuario exista
    const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${usuarioId} no existe`);
    }

    // Crear la dirección
    const nuevaDireccion = await this.prisma.direccion.create({
      data: {
        calle,
        numero,
        comuna,
        region,
        usuarioId,
      },
    });
    return nuevaDireccion;
  }

  // src/direccion/direccion.service.ts

async obtenerDireccionesPorUsuario(usuarioId: number) {
  // Verifica que el usuario exista
  const usuario = await this.prisma.usuario.findUnique({
    where: { id: usuarioId },
  });

  if (!usuario) {
    throw new NotFoundException(`Usuario con ID ${usuarioId} no encontrado`);
  }

  // Obtener direcciones del usuario
  const direcciones = await this.prisma.direccion.findMany({
    where: { usuarioId },
  });
  
  return direcciones;
}

}
