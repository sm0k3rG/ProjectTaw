import { IsString } from 'class-validator';

export class UpdateSucursalDto {
  @IsString()
  nombre?: string;

  @IsString()
  direccion?: string;

  @IsString()
  ciudad?: string;

  @IsString()
  region?: string;
}
