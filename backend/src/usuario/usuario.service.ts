// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { hash } from 'bcrypt';
import { UsuarioResponseDto } from 'src/usuario/dto/usuario.response.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    const { contrasena, ...usuarioData } = createUsuarioDto; // Extraemos la contraseña del DTO

    const hashedPassword = await hash(contrasena, 10);

    const usuario = await this.prisma.usuario.create({
      data: {
        ...usuarioData,  
        contrasena: hashedPassword,  
      },
    });

    return {
      id: usuario.id,
      rut: usuario.rut,
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      tarjetas: usuario.tarjetas,
      rol: usuario.rol,
    };
  }
}
