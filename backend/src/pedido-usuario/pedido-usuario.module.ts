import { PrismaService } from 'src/prisma/prisma.service';
import { PedidoUsuarioService } from './pedido-usuario.service';
import { Module } from '@nestjs/common';
import { PedidoUsuarioController } from './pedido-usuario.controller';

@Module({
  imports: [],
  controllers: [PedidoUsuarioController],
  providers: [PedidoUsuarioService, PrismaService],
})
export class PedidoUsuarioModule {}
