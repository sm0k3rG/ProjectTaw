import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService, LoginDto } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
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
    const user = await this.authService.createUser(userData);
    const { contrasena, ...result } = user;
    return result;
  }
} 