// src/usuarios/usuarios.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioResponseDto } from 'src/usuario/dto/usuario.response.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Ruta para crear un nuevo usuario
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    return this.usuarioService.create(createUsuarioDto);
  }
}
