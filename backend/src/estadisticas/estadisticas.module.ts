import { Module } from '@nestjs/common';
import { EstadisticasService } from './estadisticas.service';
import { EstadisticasController } from './estadisticas.controller';

@Module({
  providers: [EstadisticasService],
  controllers: [EstadisticasController]
})
export class EstadisticasModule {}
