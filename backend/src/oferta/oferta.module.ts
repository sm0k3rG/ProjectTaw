import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener un servicio de Prisma configurado
import { OfertaService } from './oferta.service';
import { OfertaController } from './oferta.controller';


@Module({
  controllers: [OfertaController],
  providers: [OfertaService, PrismaService],
})
export class OfertaModule {}
