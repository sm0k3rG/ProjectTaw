import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

export interface LoginDto {
  email: string;
  password: string;
}

export interface JwtPayload {
  id: number;
  email: string;
  role: 'Administrator' | 'Client';
  name: string;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (user && await bcrypt.compare(password, user.contrasena)) {
      const { contrasena, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Determinar el rol basado en el email (puedes ajustar esta lógica)
    const role = this.determineRole(user.email);
    
    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
      role,
      name: user.nombre,
    };

    return {
      token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role,
        name: user.nombre,
      },
    };
  }

  private determineRole(email: string): 'Administrator' | 'Client' {
    // Lógica simple: si el email contiene 'admin' es administrador
    // Puedes ajustar esta lógica según tus necesidades
    return email.toLowerCase().includes('admin') ? 'Administrator' : 'Client';
  }

  async createUser(userData: {
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    tarjetas: string;
  }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    return this.prisma.usuario.create({
      data: {
        nombre: userData.nombre,
        email: userData.email,
        contrasena: hashedPassword,
        telefono: userData.telefono,
        tarjetas: userData.tarjetas,
      },
    });
  }
} 