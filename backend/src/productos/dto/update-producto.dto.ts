import { IsOptional, IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class UpdateProductoDto {
  @IsOptional() @IsString() @IsNotEmpty()
  nombre?: string;

  @IsOptional() @IsString() @IsNotEmpty()
  descripcion?: string;

  @IsOptional() @IsNumber() @Min(0, { message: 'El precio debe ser ≥ 0' })
  precio?: number;

  @IsOptional() @IsNumber() @Min(0, { message: 'El stock debe ser ≥ 0' })
  stock?: number;                 // quítalo si no expones «stock»

  @IsOptional() @IsNumber() 
  categoriaId?: number;

  @IsOptional() @IsString()
  imagenUrl?: string;
}
