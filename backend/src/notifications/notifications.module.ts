import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsGateway } from './notifications.gateway';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:[ConfigModule],
  providers: [NotificationsService,NotificationsGateway,ConfigService],
  exports: [NotificationsService, NotificationsGateway]
})
export class NotificationsModule {}
