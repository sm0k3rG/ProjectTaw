import { IsString } from 'class-validator';

export class UpdateCategoriaDto {
  @IsString()
  readonly nombre?: string;

  @IsString()
  readonly estado?: string;
}