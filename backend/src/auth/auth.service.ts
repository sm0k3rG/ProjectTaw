
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

// Si tienes estos DTOs, descomenta e importa correctamente
// import { LoginDto } from './dto/login.dto';
// import { JwtPayload } from './dto/jwt-payload.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // ✅ Registro
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
        rol: 'Cliente',
      },
    });

    console.log(`[AUDIT] Usuario registrado: ${user.id}, IP simulada: 127.0.0.1`);
    return { message: 'Registro exitoso. Verifica tu correo (simulado).' };
  }

  //Login
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

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('Falta JWT_SECRET en el archivo .env');
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
      expiresIn: '1h',
    });

    const tipoUsuario = 'cliente';

    console.log(`[AUDIT] Usuario inició sesión: ${user.id}, IP simulada: 127.0.0.1`);
    return {
      message: 'Inicio de sesión exitoso',
      token,
      tipoUsuario,
    };
  }

  // Recuperar contraseña
  async solicitarRecuperacionContrasena(dto: ForgotPasswordDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new NotFoundException('No existe una cuenta con este correo');
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' },
    );

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      to: user.email,
      subject: 'Recuperación de contraseña',
      html: `
        <p>Hola, ${user.nombre}</p>
        <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
        <a href="${resetLink}">Restablecer contraseña</a>
        <p>Este enlace expirará en 1 hora.</p>
      `,
    });

    return { message: 'Correo de recuperación enviado correctamente' };
  }

  //  Restablecer contraseña
  async restablecerContrasena(dto: ResetPasswordDto) {
    let payload: any;

    try {
      payload = jwt.verify(dto.token, process.env.JWT_SECRET as string);
    } catch (err) {
      throw new BadRequestException('Token inválido o expirado');
    }

    const user = await this.prisma.usuario.findUnique({
      where: { id: payload.userId },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 12);

    await this.prisma.usuario.update({
      where: { id: user.id },
      data: { contrasena: hashedPassword },
    });

    return { message: 'Contraseña restablecida exitosamente' };
  }

  async editarUsuario(id: number, dto: UpdateUserDto) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });
    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    const { nombre, email, telefono, tarjetas, direccion } = dto;

    // Actualiza usuario
    await this.prisma.usuario.update({
      where: { id },
      data: {
        nombre,
        email,
        telefono,
        tarjetas,
      },
    });

    // Si se proporciona una nueva dirección, agregarla
    if (direccion) {
      await this.prisma.direccion.create({
        data: {
          ...direccion,
          usuarioId: id,
        },
      });
    }

    return { message: 'Usuario actualizado correctamente' };
  }

  // Puedes agregar aquí más métodos según lo necesites
} 