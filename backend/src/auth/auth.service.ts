import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

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
}
