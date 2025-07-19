import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PedidoService,PrismaService],
  controllers: [PedidoController]
})
export class PedidoModule {}
