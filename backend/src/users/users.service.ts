import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async editarUsuario(id: number, data: { nombre?: string; email?: string; telefono?: string }) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const updatedUser = await this.prisma.usuario.update({
      where: { id },
      data: {
        nombre: data.nombre ?? usuario.nombre,
        email: data.email ?? usuario.email,
        telefono: data.telefono ?? usuario.telefono,
      },
    });

    return {
      message: 'Usuario actualizado correctamente',
      usuario: {
        id: updatedUser.id,
        nombre: updatedUser.nombre,
        email: updatedUser.email,
        telefono: updatedUser.telefono,
      },
    };
  }
}
