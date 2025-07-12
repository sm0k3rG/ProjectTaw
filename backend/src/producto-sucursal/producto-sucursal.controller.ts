import { Body, Controller, Post, Put, Param, UseGuards } from '@nestjs/common';
import { CreateProductoSucursalDto } from './dto/create-producto-sucursal.dto';
import { UpdateProductoSucursalDto } from './dto/update-producto-sucursal.dto';
import { ProductoSucursalService } from './producto-sucursal.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Rol } from '@prisma/client';

@Controller('producto-sucursal')
export class ProductoSucursalController {
  constructor(private readonly productoSucursalService: ProductoSucursalService) {}

  @Post()
  async create(@Body() createProductoSucursalDto: CreateProductoSucursalDto) {
    return this.productoSucursalService.create(createProductoSucursalDto);
  }

  @Put(':productoId/:sucursalId')
  @Roles(Rol.Admin)  // Usamos el enum Rol para definir los roles permitidos
  @UseGuards(JwtAuthGuard, RolesGuard)  // Usamos ambos guards
  async update(
    @Param('productoId') productoId: number,
    @Param('sucursalId') sucursalId: number,
    @Body() updateDto: UpdateProductoSucursalDto,
  ) {
    return this.productoSucursalService.update(productoId, sucursalId, updateDto);
  }
}
