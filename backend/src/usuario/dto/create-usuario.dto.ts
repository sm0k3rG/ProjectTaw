// src/usuarios/dto/create-usuario.dto.ts
import { IsString, IsEmail, IsEnum, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Rol } from 'prisma/generated/prisma';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(12)
  contrasena: string;

  @IsString()
  telefono: string;

  @IsString()
  tarjetas: string;

  @IsEnum(Rol)
  rol: Rol;
}
