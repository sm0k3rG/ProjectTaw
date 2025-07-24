import { IsString, IsEnum } from 'class-validator';

export enum CategoriaEstado {
  ACTIVA = 'ACTIVA',
  ELIMINADA = 'ELIMINADA'
}

export class CreateCategoriaDto {
  @IsString()
  readonly nombre: string;

  @IsEnum(CategoriaEstado)
  readonly estado: CategoriaEstado;
}