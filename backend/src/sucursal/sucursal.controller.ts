import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';

@Controller('sucursales')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

  // Crear una nueva sucursal
  @Post()
  create(@Body() createSucursalDto: CreateSucursalDto) {
    return this.sucursalService.create(createSucursalDto);
  }

  // Obtener todas las sucursales
  @Get()
  findAll() {
    return this.sucursalService.findAll();
  }

  // Obtener una sucursal por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucursalService.findOne(+id);
  }

  // Actualizar una sucursal
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSucursalDto: UpdateSucursalDto) {
    return this.sucursalService.update(+id, updateSucursalDto);
  }

  // Eliminar una sucursal
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sucursalService.remove(+id);
  @Get('cercanas/:usuarioId')
  async getSucursalesCercanas(@Param('usuarioId') usuarioId: string) {
    const id = parseInt(usuarioId);
    const sucursales = await this.sucursalService.obtenerSucursalesCercanas(id);

    if (!sucursales.length) {
      throw new NotFoundException('No hay sucursales cercanas a tu ubicación');
    }

    return sucursales;
  }
}
