// src/sucursal/sucursal.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { SucursalService } from './sucursal.service';

@Controller('sucursales')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

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
