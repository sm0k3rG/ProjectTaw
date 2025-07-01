// src/sucursal/sucursal.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener un servicio de Prisma configurado
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';

@Injectable()
export class SucursalService {
  constructor(private prisma: PrismaService) {}

  // Crear una nueva sucursal
  async create(createSucursalDto: CreateSucursalDto) {
    return await this.prisma.sucursal.create({
      data: createSucursalDto,
    });
  }

  // Obtener todas las sucursales
  async findAll() {
    return await this.prisma.sucursal.findMany();
  }

  // Obtener una sucursal por ID
  async findOne(id: number) {
    return await this.prisma.sucursal.findUnique({
      where: { id },
    });
  }

  // Actualizar una sucursal
  async update(id: number, updateSucursalDto: UpdateSucursalDto) {
    return await this.prisma.sucursal.update({
      where: { id },
      data: updateSucursalDto,
    });
  }

  // Eliminar una sucursal
  async remove(id: number) {
    return await this.prisma.sucursal.delete({
      where: { id },
    });
  }
}
