// src/direccion/dto/create-direccion.dto.ts

import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDireccionDto {
  @IsString()
  @IsNotEmpty()
  calle: string;

  @IsInt()
  @IsNotEmpty()
  numero: number;

  @IsString()
  @IsNotEmpty()
  comuna: string;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
