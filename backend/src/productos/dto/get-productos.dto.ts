// src/productos/dto/get-productos.dto.ts
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class GetProductosDto {
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsNumber()
  priceMin?: number;

  @IsOptional()
  @IsNumber()
  priceMax?: number;

  @IsOptional()
  @IsBoolean()
  inStock?: boolean;

  @IsNumber()
  page: number = 1;

  @IsNumber()
  limit: number = 20;
}
