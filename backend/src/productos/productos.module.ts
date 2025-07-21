import { Module } from '@nestjs/common';
import { ProductoService } from './productos.service';
import { ProductoController } from './productos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProductoService,PrismaService],
  controllers: [ProductoController]
})
export class ProductosModule {}
