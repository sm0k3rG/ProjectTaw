import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CategoriaEstado } from './create-categoria.dto';

export class UpdateCategoriaDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsEnum(CategoriaEstado)
  readonly estado?: CategoriaEstado;
}