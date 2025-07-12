// src/producto-sucursal/producto-sucursal.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductoSucursalDto } from './dto/create-producto-sucursal.dto';
import { UpdateProductoSucursalDto } from './dto/update-producto-sucursal.dto';
import { ProductoSucursal } from '@prisma/client';

@Injectable()
export class ProductoSucursalService {
  constructor(private prisma: PrismaService) {}

  // Crear un nuevo registro de ProductoSucursal
  async create(
    createProductoSucursalDto: CreateProductoSucursalDto,
  ): Promise<ProductoSucursal> {
    return this.prisma.productoSucursal.create({
      data: createProductoSucursalDto,
    });
  }

  // Obtener todos los registros de ProductoSucursal
  async findAll(): Promise<ProductoSucursal[]> {
    return this.prisma.productoSucursal.findMany();
  }

  // Obtener un ProductoSucursal por sus ids
  async findOne(
    productoId: number,
    sucursalId: number,
  ): Promise<ProductoSucursal | null> {
    return this.prisma.productoSucursal.findUnique({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
    });
  }

  // Actualizar el stock de un ProductoSucursal
   async update(
    productoId: number,
    sucursalId: number,
    updateDto: UpdateProductoSucursalDto,
  ): Promise<ProductoSucursal> {
    // Verificar si el producto existe
    const producto = await this.prisma.producto.findUnique({
      where: { id: productoId },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${productoId} no encontrado.`);
    }

    // Verificar si la sucursal existe
    const sucursal = await this.prisma.sucursal.findUnique({
      where: { id: sucursalId },
    });

    if (!sucursal) {
      throw new NotFoundException(`Sucursal con ID ${sucursalId} no encontrada.`);
    }

    // Si ambos existen, realizar la actualización
    return this.prisma.productoSucursal.update({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
      data: updateDto,
    });
  }

  // Eliminar un ProductoSucursal
  async remove(
    productoId: number,
    sucursalId: number,
  ): Promise<ProductoSucursal> {
    return this.prisma.productoSucursal.delete({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
    });
  }
}
