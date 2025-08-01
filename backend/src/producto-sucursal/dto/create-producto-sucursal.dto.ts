// src/producto-sucursal/dto/create-producto-sucursal.dto.ts
import { IsInt, IsPositive } from 'class-validator';

export class CreateProductoSucursalDto {
  @IsInt()
  @IsPositive()
  productoId: number;

  @IsInt()
  @IsPositive()
  sucursalId: number;

  @IsInt()
  @IsPositive()
  stock: number;
}
