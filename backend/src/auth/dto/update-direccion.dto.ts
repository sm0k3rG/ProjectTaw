import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateDireccionDto {
  @IsOptional()
  @IsString()
  comuna?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  calle?: string;

  @IsOptional()
  @IsInt()
  numero?: number;
}
