import { IsString, IsDateString, IsInt, IsPositive, IsOptional, IsEnum } from 'class-validator';

export enum OfertaEstado {
  ACTIVA = 'ACTIVA',
  INACTIVA = 'INACTIVA',
  EXPIRADA = 'EXPIRADA',
}

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

  @IsOptional()
  @IsEnum(OfertaEstado)
  estado?: OfertaEstado;
}
