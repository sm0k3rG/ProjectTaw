import { IsNotEmpty, IsOptional, IsNumber, isString } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  categoriaId: number;

  @IsOptional()
  @IsNumber()
  ofertaId?: number;
  @IsOptional()
  imagenUrl?: string;
}
