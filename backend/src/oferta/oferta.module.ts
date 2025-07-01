import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener un servicio de Prisma configurado
import { SucursalController } from 'src/sucursal/sucursal.controller';
import { SucursalService } from 'src/sucursal/sucursal.service';

@Module({
  controllers: [SucursalController],
  providers: [SucursalService, PrismaService],
})
export class SucursalModule {}
