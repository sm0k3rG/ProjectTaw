// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';  // PrismaService para interactuar con la base de datos
import { RolesGuard } from './roles.guard';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    JwtModule.register({
      secret: 'clave',  // Cargar el secreto desde la variable de entorno
      signOptions: { expiresIn: '1h' }, // Configurar un tiempo de expiración más adecuado (1 hora)
    }),
  ],
  providers: [AuthService, PrismaService,RolesGuard,JwtStrategy], // Usamos PrismaService directamente en AuthService
  controllers: [AuthController],
})
export class AuthModule {}
