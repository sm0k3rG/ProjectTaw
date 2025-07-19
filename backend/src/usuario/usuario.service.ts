// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { hash } from 'bcrypt';
import { UsuarioResponseDto } from 'src/usuario/dto/usuario.response.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    const { contrasena, ...usuarioData } = createUsuarioDto; // Extraemos la contraseña del DTO

    // Ciframos la contraseña antes de guardarla
    const hashedPassword = await hash(contrasena, 10);

    // Creamos el usuario con los datos cifrados
    const usuario = await this.prisma.usuario.create({
      data: {
        ...usuarioData,  // Usamos los datos del usuario
        contrasena: hashedPassword,  // Asignamos la contraseña cifrada
      },
    });

    // Devolvemos el usuario con los datos necesarios
    return {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      tarjetas: usuario.tarjetas,
      rol: usuario.rol,
    };
  }
}
