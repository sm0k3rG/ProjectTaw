import { Module } from '@nestjs/common';
import { DireccionService } from './direccion.service';

import { PrismaModule } from '../prisma/prisma.module';
import { DireccionController } from './direccion.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DireccionController],
  providers: [DireccionService],
  exports: [DireccionService],
})
export class DireccionModule {} 