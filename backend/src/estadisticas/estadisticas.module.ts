import { Module } from '@nestjs/common';
import { EstadisticasService } from './estadisticas.service';
import { EstadisticasController } from './estadisticas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [EstadisticasService, PrismaService],
  controllers: [EstadisticasController]
})
export class EstadisticasModule {}
