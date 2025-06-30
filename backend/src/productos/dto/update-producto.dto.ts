import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class UpdateProductoDto {
  @IsOptional()
  @IsNotEmpty()
  nombre?: string;

  @IsOptional()
  @IsNotEmpty()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsNumber()
  categoriaId?: number;

  @IsOptional()
  @IsNumber()
  ofertaId?: number;
}
