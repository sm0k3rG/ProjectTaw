import { HttpCode, HttpStatus } from '@nestjs/common';
// src/auth/auth.controller.ts
import { Controller, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { DireccionService } from '../direccion/direccion.service';


@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private direccionService: DireccionService,
  ) {}



  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginAuthDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() userData: {
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    tarjetas: string;
  }) {
    return await this.authService.register(userData);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.solicitarRecuperacionContrasena(dto);
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.restablecerContrasena(dto);
  }

  @Patch('editar/:id')
  editarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto
  ) {
    return this.authService.editarUsuario(id, dto);
  }

  @Patch('direccion/:id')
  actualizarDireccion(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDireccionDto
  ) {
    return this.direccionService.actualizarDireccion(id, dto);
  }

  @Delete('direccion/:id')
  eliminarDireccion(@Param('id', ParseIntPipe) id: number) {
    return this.direccionService.eliminarDireccion(id);
  }

}