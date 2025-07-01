import { Module } from '@nestjs/common';
import { ProductoSucursalService } from './producto-sucursal.service';
import { ProductoSucursalController } from './producto-sucursal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProductoSucursalService,PrismaService],
  controllers: [ProductoSucursalController]
})
export class ProductoSucursalModule {}
