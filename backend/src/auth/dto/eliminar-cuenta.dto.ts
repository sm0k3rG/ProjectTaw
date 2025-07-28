// src/users/dto/eliminar-cuenta.dto.ts
import { IsString, MinLength } from 'class-validator';

export class EliminarCuentaDto {
  @IsString()
  @MinLength(6)
  contrasena: string;
}