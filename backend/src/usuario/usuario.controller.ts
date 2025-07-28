// src/usuarios/usuarios.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioResponseDto } from 'src/usuario/dto/usuario.response.dto';
import { UsuariosService } from './usuario.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Ruta para crear un nuevo usuario
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  getAll(): Promise<UsuarioResponseDto[]> {
    return this.usuariosService.findAll();
  }
}
