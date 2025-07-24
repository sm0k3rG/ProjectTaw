import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriaDto, CategoriaEstado } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';


@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return this.prisma.categoria.create({
      data: createCategoriaDto,
    });
  }

  async findAll() {
    return this.prisma.categoria.findMany();
  }

  async findOne(id: number) {
    return this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.prisma.categoria.update({
      where: { id: Number(id) },
      data: updateCategoriaDto,
    });
  }

  async remove(id: number) {
    try {
      // Validar si la categoría tiene productos asociados
      const productosAsociados = await this.prisma.producto.findMany({
        where: { categoriaId: id }
      });
      if (productosAsociados.length > 0) {
        throw new BadRequestException('No se puede eliminar la categoría porque tiene productos asociados.');
      }
      const categoria = await this.prisma.categoria.update({
        where: { id },
        data: { estado: CategoriaEstado.ELIMINADA }
      });

      if(!categoria) {
        throw new NotFoundException('La categoría que se intenta eliminar no existe.');
      }
      return { mensaje: `La categoría ${categoria.nombre} se eliminó correctamente`}
    } catch (error) {
      throw error;
    }
  }
}
