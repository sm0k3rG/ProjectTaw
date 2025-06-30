import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductoDto: CreateProductoDto) {
    return await this.prisma.producto.create({
      data: createProductoDto,
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
