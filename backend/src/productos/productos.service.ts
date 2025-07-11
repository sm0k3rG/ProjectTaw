import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from '@prisma/client';

@Injectable()
export class ProductoService {
  constructor(private readonly prisma: PrismaService) {}
  
async create(createProductoDto: CreateProductoDto) {
  // Verificar si el producto ya existe en la base de datos
  const existingProduct = await this.prisma.producto.findFirst({
    where: { nombre: createProductoDto.nombre }, // Cambia 'nombre' por el campo único que defines para tu producto
  });

  if (existingProduct) {
    throw new Error('El producto ya existe en la base de datos');
  }

  // Si no existe, se crea el nuevo producto
  return await this.prisma.producto.create({
    data: createProductoDto,
  });
}

async obtenerProductosConDetalles(): Promise<Producto[]> {
    return this.prisma.producto.findMany({
      include: {
        categoria: {
        select: {
          id: true,
          nombre: true,
          estado: true, // Incluye el campo estado de la categoría
        },
      }, // Incluye la categoría asociada al producto
        sucursales: {
          select: {
            stock: true, // Solo incluye el stock
            sucursal: {
              select: {
                id: true,
                nombre: true,
                direccion: true,
                ciudad: true,
                region: true,
              },
            },
          },
        },
      },
    });
  }


  async findAll() {
    return await this.prisma.producto.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.producto.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.prisma.producto.update({
      where: { id },
      data: updateProductoDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.producto.delete({
      where: { id },
    });
  }
}
