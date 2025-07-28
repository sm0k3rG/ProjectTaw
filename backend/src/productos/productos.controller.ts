  import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, UsePipes, ValidationPipe, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoService } from './productos.service';
import { Producto, Rol } from '@prisma/client';

import { CreateProductDto } from './dto/create-producto.dto';
import { GetProductosDto } from './dto/get-productos.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}
   // @Roles(Rol.Admin)  // Usamos el enum Rol para definir los roles permitidos
  // @UseGuards(JwtAuthGuard, RolesGuard)  // Usamos ambos guards
  @Post()
  agregarProducto(@Body() createProductoDto: CreateProductDto) {
    return this.productoService.agregarProducto(createProductoDto);
  }

  @Get("catalogo")
  @UsePipes(new ValidationPipe({ transform: true }))
  async listar(@Query() params: GetProductosDto) {
    return this.productoService.findAll(params);
  }
  @Put(':id')
update(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: UpdateProductoDto,
) {
  return this.productoService.actualizarProducto(
    id,
    dto,
    null,          // ← sin userId por ahora
  );
}

  @Get('registrados')
  // @Roles(Rol.Admin)  // Usamos el enum Rol para definir los roles permitidos
  // @UseGuards(JwtAuthGuard, RolesGuard)  // Usamos ambos guards
  async obtenerProductosConDetalles(
  @Query('page') page: number = 1,  // Página por defecto
  @Query('limit') limit: number = 10,  // Límite por defecto
  @Query('categoriaId') categoriaId?: number,
  @Query('ofertaId') ofertaId?: number,  // 'asc' o 'desc'
  @Query('orden') orden?: string,  // 'asc' o 'desc'
): Promise<{ total: number; totalPaginas: number; productos: Producto[] }> {
  // Llamamos a la función del servicio que ya tenemos
  const { total, totalPaginas, productos } = await this.productoService.obtenerProductosConDetalles(page, limit, categoriaId, orden, ofertaId);

  // Devolvemos el objeto con el total de productos, el total de páginas y los productos
  return {
    total,
    totalPaginas,
    productos,
  };
}


// @Roles(Rol.Admin)  // Usamos el enum Rol para definir los roles permitidos
// @UseGuards(JwtAuthGuard, RolesGuard)  // Usamos ambos guards
 @Delete(':id')
async eliminarProducto(@Param('id', ParseIntPipe) id: number) {
  return this.productoService.eliminarProducto(id);
}
}
