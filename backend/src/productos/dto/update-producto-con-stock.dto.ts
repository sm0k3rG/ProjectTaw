import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateProductoDto } from './update-producto.dto';
import { UpdateStockSucursalDto } from './update-stock-sucursal.dto';


export class UpdateProductoConStockDto {
  @ValidateNested()
  @Type(() => UpdateProductoDto)
  datosProducto: UpdateProductoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateStockSucursalDto)
  stockPorSucursal: UpdateStockSucursalDto[];
}