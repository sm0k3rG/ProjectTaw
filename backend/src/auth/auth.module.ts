import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { EmailModule } from '../email/email.module';
import { DireccionService } from '../direccion/direccion.service';
import { SucursalModule } from '../sucursal/sucursal.module';


@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, DireccionService],
  imports: [EmailModule, SucursalModule],
})
export class AuthModule {}
