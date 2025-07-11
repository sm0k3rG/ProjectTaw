// src/usuarios/dto/usuario.response.dto.ts

import { Rol } from "@prisma/client";


export class UsuarioResponseDto {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  tarjetas: string;
  rol: Rol;
}
