import { Injectable, NotFoundException,BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

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
  async eliminarCuentaUsuario(userId: number, contrasena: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: userId },
      include: {
        pedidos: {
          where: {
            estado: {
              in: ['PENDIENTE', 'ACTIVO'], // verifica pedidos activos
            },
          },
        },
      },
    });

    if (!usuario) throw new BadRequestException('Usuario no encontrado');

    // Verificar contraseña
    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!contrasenaValida) throw new ForbiddenException('Contraseña incorrecta');

    // Verificar pedidos activos
    if (usuario.pedidos.length > 0) {
      throw new BadRequestException('No puedes eliminar tu cuenta con pedidos activos');
    }

    // Cambiar estado a ELIMINADO (eliminación lógica)
    await this.prisma.usuario.update({
      where: { id: userId },
      data: { estado: 'ELIMINADO' },
    });

    return { mensaje: 'Tu cuenta ha sido eliminada correctamente (desactivada).' };
  }
  async administrarUsuario(
  adminId: number,
  targetUserId: number,
  accion: 'desactivar' | 'eliminar'
) {
  const admin = await this.prisma.usuario.findUnique({ where: { id: adminId } });
  const targetUser = await this.prisma.usuario.findUnique({ where: { id: targetUserId } });

  if (!admin || admin.rol !== 'Admin') {
    throw new ForbiddenException('No tienes permisos para realizar esta acción');
  }

  if (!targetUser) {
    throw new NotFoundException('Usuario objetivo no encontrado');
  }

  if (targetUser.estado === 'ELIMINADO') {
    throw new BadRequestException('El usuario ya está eliminado');
  }

  const nuevoEstado = accion === 'eliminar' ? 'ELIMINADO' : 'DESACTIVADO';

  const updatedUser = await this.prisma.usuario.update({
    where: { id: targetUserId },
    data: { estado: nuevoEstado },
  });

  return {
    message: `Usuario ${accion === 'eliminar' ? 'eliminado' : 'desactivado'} correctamente`,
    usuario: {
      id: updatedUser.id,
      nombre: updatedUser.nombre,
      estado: updatedUser.estado,
    },
  };
}
}