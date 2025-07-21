// src/auth/dto/update-user.dto.ts
import { IsEmail, IsOptional, IsString, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class NuevaDireccionDto {
  @IsString()
  comuna: string;

  @IsString()
  region: string;

  @IsNumber()
  numero: number;

  @IsString()
  calle: string;
}

export class UpdateUserDto {
  @IsOptional() @IsString()
  nombre?: string;

  @IsOptional() @IsEmail()
  email?: string;

  @IsOptional() @IsString()
  telefono?: string;

  @IsOptional() @IsString()
  tarjetas?: string;

  @IsOptional() @ValidateNested()
  @Type(() => NuevaDireccionDto)
  direccion?: NuevaDireccionDto;
}
