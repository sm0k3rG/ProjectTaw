// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioResponseDto } from 'src/auth/dto/usuario.response.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,  // Usamos Prisma directamente aquí
    private readonly jwtService: JwtService,  // Servicio para generar JWT
  ) {}

  async login(loginUsuarioDto: LoginAuthDto): Promise<{ access_token: string }> {
    const { email, contrasena } = loginUsuarioDto;

    // Buscar el usuario directamente con Prisma
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },  // Prisma consulta por email
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar si la contraseña es correcta
    const isPasswordValid = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!isPasswordValid) {
      throw new Error('Contraseña incorrecta');
    }

    // Generar el payload para el JWT
    const payload = {
      sub: usuario.id,     // ID del usuario
      email: usuario.email, // Email del usuario
      rol: usuario.rol,     // Rol del usuario (agregado aquí)
    };
    // Generar el token JWT
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,  // Devolvemos el JWT generado
    };
  }
}
