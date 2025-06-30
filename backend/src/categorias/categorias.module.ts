import { Module } from '@nestjs/common';
import { CategoriaController } from './categorias.controller';
import { CategoriaService } from './categorias.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  providers: [CategoriaService,PrismaService],
  controllers: [CategoriaController]
})
export class CategoriasModule {}
