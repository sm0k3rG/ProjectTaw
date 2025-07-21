import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports:[NotificationsModule],
  providers: [PedidoService,PrismaService,NotificationsService],
  controllers: [PedidoController]
})
export class PedidoModule {}
