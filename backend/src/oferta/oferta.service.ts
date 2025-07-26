import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOfertaDto, OfertaEstado } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';

@Injectable()
export class OfertaService {
  constructor(private readonly prisma: PrismaService) {}

  private determinarEstadoOferta(fechaInicio: Date, fechaFin: Date): OfertaEstado {
    const ahora = new Date();
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    if (ahora >= inicio && ahora <= fin) {
      return OfertaEstado.ACTIVA;
    } else if (ahora < inicio) {
      return OfertaEstado.INACTIVA;
    } else {
      return OfertaEstado.EXPIRADA;
    }
  }

  async create(createOfertaDto: CreateOfertaDto) {
    const { estado, ...rest } = createOfertaDto;
    
    // Determinar el estado automáticamente si no se proporciona
    const estadoDeterminado = estado || this.determinarEstadoOferta(rest.fechaInicio, rest.fechaFin);
    
    // Convertir las fechas a objetos Date completos
    const data: any = { 
      ...rest,
      fechaInicio: new Date(rest.fechaInicio),
      fechaFin: new Date(rest.fechaFin),
      estado: estadoDeterminado 
    };
    
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
    const { estado, fechaInicio, fechaFin, ...rest } = updateOfertaDto;
    
    // Si se actualizan las fechas, recalcular el estado automáticamente
    let estadoDeterminado = estado;
    if (fechaInicio || fechaFin) {
      const ofertaActual = await this.prisma.oferta.findUnique({ where: { id } });
      if (ofertaActual) {
        const nuevaFechaInicio = fechaInicio || ofertaActual.fechaInicio;
        const nuevaFechaFin = fechaFin || ofertaActual.fechaFin;
        estadoDeterminado = this.determinarEstadoOferta(nuevaFechaInicio, nuevaFechaFin);
      }
    }
    
    const data: any = { ...rest };
    if (fechaInicio) data.fechaInicio = new Date(fechaInicio);
    if (fechaFin) data.fechaFin = new Date(fechaFin);
    if (estadoDeterminado) data.estado = estadoDeterminado;
    
    return this.prisma.oferta.update({
      where: { id },
      data,
    });
  }

  async actualizarEstadosAutomaticamente() {
    const ofertas = await this.prisma.oferta.findMany();
    const ahora = new Date();
    
    for (const oferta of ofertas) {
      const nuevoEstado = this.determinarEstadoOferta(oferta.fechaInicio, oferta.fechaFin);
      
      if (oferta.estado !== nuevoEstado) {
        await this.prisma.oferta.update({
          where: { id: oferta.id },
          data: { estado: nuevoEstado },
        });
      }
    }
    
    return { mensaje: "Estados de ofertas actualizados automáticamente" };
  }

  async remove(id: number) {
    try {
      const productosAsociados = await this.prisma.producto.findMany({
        where: { ofertaId: id },
        select: { id: true },
      });

      await this.prisma.oferta.update({
        where: { id },
        data: {
          estado: OfertaEstado.EXPIRADA,
          productos: {
            disconnect: productosAsociados.map((producto) => ({ id: producto.id })),
          },
        },
      });
      return {mensaje: "Oferta eliminada correctamente"};
    } catch (error) {
      throw error;
    }
  }
}
