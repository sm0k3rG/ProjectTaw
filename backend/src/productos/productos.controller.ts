import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoService } from './productos.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Producto, Rol } from '@prisma/client';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { CreateProductDto } from './dto/create-producto.dto';
import { GetProductosDto } from './dto/get-productos.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get("Catalago")
  @UsePipes(new ValidationPipe({ transform: true }))
  async listar(@Query() params: GetProductosDto) {
    return this.productoService.findAll(params);
  }

  @Get('registrados')
  @Roles(Rol.Admin)  // Usamos el enum Rol para definir los roles permitidos
  @UseGuards(JwtAuthGuard, RolesGuard)  // Usamos ambos guards
  async obtenerProductosConDetalles(
    @Query('page') page: number = 1,  // Página por defecto
    @Query('limit') limit: number = 10): Promise<Producto[]> {
    return this.productoService.obtenerProductosConDetalles(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
