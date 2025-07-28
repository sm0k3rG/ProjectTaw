import { Module } from '@nestjs/common';
import { AuditoriaService } from './auditoria.service';

@Module({
  providers: [AuditoriaService],
  exports:   [AuditoriaService],   // ⬅️ hace visible el servicio a otros módulos
})
export class AuditoriaModule {}
