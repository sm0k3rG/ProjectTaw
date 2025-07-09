// src/usuarios/dto/usuario.response.dto.ts

import { Rol } from "prisma/generated/prisma";


export class UsuarioResponseDto {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  tarjetas: string;
  rol: Rol;
}
