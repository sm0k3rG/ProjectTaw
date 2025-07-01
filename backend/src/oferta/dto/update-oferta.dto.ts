import { IsString, IsDateString, IsInt, IsPositive, IsOptional } from 'class-validator';

export class UpdateOfertaDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  porcentaje?: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fechaInicio?: Date;

  @IsOptional()
  @IsDateString()
  fechaFin?: Date;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsInt()
  productoId?: number;
}
