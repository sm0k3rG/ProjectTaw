import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { CreateProductoSucursalDto } from './dto/create-producto-sucursal.dto';
import { UpdateProductoSucursalDto } from './dto/update-producto-sucursal.dto';
import { ProductoSucursalService } from './producto-sucursal.service';

@Controller('producto-sucursal')
export class ProductoSucursalController {
  constructor(private readonly productoSucursalService: ProductoSucursalService) {}

  @Post()
  async create(@Body() createProductoSucursalDto: CreateProductoSucursalDto) {
    return this.productoSucursalService.create(createProductoSucursalDto);
  }

  @Put(':productoId/:sucursalId')
  async update(
    @Param('productoId') productoId: number,
    @Param('sucursalId') sucursalId: number,
    @Body() updateDto: UpdateProductoSucursalDto,
  ) {
    return this.productoSucursalService.update(productoId, sucursalId, updateDto);
  }
}
