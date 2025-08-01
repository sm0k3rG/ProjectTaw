// src/direccion/direccion.controller.ts

import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DireccionService } from './direccion.service';
import { CreateDireccionDto } from './dto/create-direccion.dto';

@Controller('direcciones')
export class DireccionController {
  constructor(private readonly direccionService: DireccionService) {}

  @Post()
  create(@Body() createDireccionDto: CreateDireccionDto) {
    return this.direccionService.create(createDireccionDto); 
  }

  @Get('usuario/:usuarioId')
  getDireccionesPorUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number) {
    return this.direccionService.obtenerDireccionesPorUsuario(usuarioId);
  }
}
