import { IsNotEmpty, IsPositive } from "class-validator";

// src/producto-sucursal/dto/update-producto-sucursal.dto.ts
export class UpdateProductoSucursalDto {
  @IsPositive()
  @IsNotEmpty()
  stock: number;
}
