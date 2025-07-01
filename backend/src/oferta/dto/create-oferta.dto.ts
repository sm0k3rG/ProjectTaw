import { IsString, IsDateString, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateOfertaDto {
  @IsPositive()
  @IsInt()
  porcentaje: number;

  @IsString()
  descripcion: string;

  @IsDateString()
  fechaInicio: Date;

  @IsDateString()
  fechaFin: Date;

  @IsString()
  estado: string;

  @IsInt()
  productoId: number;
}
