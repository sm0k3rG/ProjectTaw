import { Module } from '@nestjs/common';
import { ProductoService } from './productos.service';
import { ProductoController } from './productos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
  providers: [ProductoService,PrismaService],
  controllers: [ProductoController]
})
export class ProductosModule {}
