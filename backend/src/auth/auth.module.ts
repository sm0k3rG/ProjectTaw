// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // Cambiar esto por un secreto más seguro
      signOptions: { expiresIn: '60s' }, // Token expira en 1 minuto
    }),
    UsuarioModule, // Dependiendo de cómo gestionas los usuarios
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
