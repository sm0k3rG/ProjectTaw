import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';

@Injectable()
export class OfertaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOfertaDto: CreateOfertaDto) {
    const { productoId, ...rest } = createOfertaDto;
    const data: any = { ...rest };
    if (productoId) {
      data.productos = {
        connect: { id: productoId },
      };
    }
    return this.prisma.oferta.create({ data });
  }

  async findAll() {
    return this.prisma.oferta.findMany({
      include: {
        productos: true, 
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.oferta.findUnique({
      where: { id },
      include: {
        productos: true,
      },
    });
  }

  async update(id: number, updateOfertaDto: UpdateOfertaDto) {
    return this.prisma.oferta.update({
      where: { id },
      data: updateOfertaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.oferta.delete({
      where: { id },
    });
  }
}
