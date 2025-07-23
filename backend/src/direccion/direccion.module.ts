import { Module } from '@nestjs/common';
import { DireccionService } from './direccion.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DireccionService],
  exports: [DireccionService],
})
export class DireccionModule {} 