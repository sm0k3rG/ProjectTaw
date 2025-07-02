import { IsNotEmpty, IsOptional, IsNumber, isString, Min } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @Min(0)
  precio: number;

  @IsNumber()
  categoriaId: number;

  @IsOptional()
  @IsNumber()
  ofertaId?: number;
  
  @IsOptional()
  imagenUrl?: string;
}
