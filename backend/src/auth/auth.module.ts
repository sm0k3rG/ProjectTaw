import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { EmailModule } from '../email/email.module';
import { DireccionService } from '../direccion/direccion.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, DireccionService],
  imports: [EmailModule],
})
export class AuthModule {}
