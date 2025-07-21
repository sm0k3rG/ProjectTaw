import { IsString } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly estado: string;
}