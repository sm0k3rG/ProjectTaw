import { IsOptional, IsString, IsNumber, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductoEstado } from '@prisma/client';  // Si usas enums

// DTO para los datos del producto
export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsEnum(ProductoEstado)
  estado?: ProductoEstado;

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}
