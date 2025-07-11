import { Module } from '@nestjs/common';
import { UsuariosService } from './usuario.service';
import { UsuariosController } from './usuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  providers: [UsuariosService,PrismaService],
  controllers: [UsuariosController]
})
export class UsuarioModule {}
