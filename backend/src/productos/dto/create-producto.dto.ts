// create-product.dto.ts

import { IsNotEmpty, IsOptional, IsNumber, IsString, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  categoriaId: number;

  @IsOptional()
  @IsNumber()
  ofertaId?: number;

  @IsOptional()
  @IsString()
  imagenUrl?: string;

  @IsArray()
  @IsNotEmpty()
  sucursales: { id: number, stock: number }[];  // Para definir las sucursales y stock
}

