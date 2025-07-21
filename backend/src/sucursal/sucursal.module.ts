// src/sucursal/sucursal.module.ts
import { Module } from '@nestjs/common';
import { SucursalController } from './sucursal.controller';
import { SucursalService } from './sucursal.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  controllers: [SucursalController],
  providers: [SucursalService, PrismaService],
})
export class SucursalModule {}
