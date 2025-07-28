import { Module } from '@nestjs/common';
import { ProductoService } from './productos.service';
import { ProductoController } from './productos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuditoriaModule } from '../auditoria/auditoria.module';

@Module({
  imports: [AuditoriaModule], 
  providers: [ProductoService,PrismaService],
  controllers: [ProductoController]
})
export class ProductosModule {}
