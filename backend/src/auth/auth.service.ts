import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // ✅ Función para registrar usuario
  async register(dto: any) {
    const { nombre, email, contrasena, terminosAceptados } = dto;

    if (!terminosAceptados) {
      throw new BadRequestException('Debes aceptar los términos y condiciones');
    }

    const existingUser = await this.prisma.usuario.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(contrasena, 12);

    const user = await this.prisma.usuario.create({
      data: {
        nombre,
        email,
        contrasena: hashedPassword,
        telefono: '',
        tarjetas: '',
      },
    });

    console.log(`[AUDIT] Usuario registrado: ${user.id}, IP simulada: 127.0.0.1`);
    return { message: 'Registro exitoso. Verifica tu correo (simulado).' };
  }

  // ✅ Función para iniciar sesión
  async login(dto: any) {
    const { email, contrasena } = dto;

    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('El correo no está registrado');
    }

    const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!passwordMatch) {
      throw new BadRequestException('Credenciales incorrectas');
    }

    // 🔐 JWT token
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('Falta JWT_SECRET en el archivo .env');
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
      expiresIn: '1h',
    });

    // Puedes cambiar esto si agregas el tipo de usuario en el modelo
    const tipoUsuario = 'cliente';

    console.log(`[AUDIT] Usuario inició sesión: ${user.id}, IP simulada: 127.0.0.1`);
    return {
      message: 'Inicio de sesión exitoso',
      token,
      tipoUsuario,
    };
  }
}
