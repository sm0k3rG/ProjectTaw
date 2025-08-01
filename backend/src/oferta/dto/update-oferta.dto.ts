import { IsString, IsDateString, IsInt, IsPositive, IsOptional, IsEnum } from 'class-validator';
import { OfertaEstado } from './create-oferta.dto';

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
  @IsEnum(OfertaEstado)
  estado?: OfertaEstado;
}
