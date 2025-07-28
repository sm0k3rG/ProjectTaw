import { IsNumber, IsInt } from 'class-validator';

export class UpdateStockSucursalDto {
  @IsInt()
  sucursalId: number;

  @IsNumber()
  stock: number;
}
