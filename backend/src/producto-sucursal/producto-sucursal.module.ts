import { Module } from '@nestjs/common';
import { ProductoSucursalService } from './producto-sucursal.service';
import { ProductoSucursalController } from './producto-sucursal.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';

@Module({
  providers: [ProductoSucursalService,PrismaService,NotificationsService,NotificationsGateway],
  imports:[NotificationsModule],
  controllers: [ProductoSucursalController]
})
export class ProductoSucursalModule {}
