// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { Rol } from '@prisma/client'; // Importa el enum Rol

export const ROLES_KEY = 'roles';

export const Roles = (...roles: Rol[]) => SetMetadata(ROLES_KEY, roles); // Usamos el enum Rol
