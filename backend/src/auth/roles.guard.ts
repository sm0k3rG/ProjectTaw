// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Rol } from '@prisma/client'; // Importa el enum de Prisma
import { ROLES_KEY } from './roles.decorator';
// roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Rol[]>(ROLES_KEY, context.getHandler());  // Usamos Rol[] en lugar de string[]
    if (!requiredRoles) {
      return true;  // Si no se especifican roles, se permite el acceso
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;  // Accedemos al usuario desde el request (ya está en el payload)

    // Verificamos si el rol del usuario coincide con los roles requeridos
    return requiredRoles.includes(user.rol);  // Comparación directa con el enum Rol
  }
}

