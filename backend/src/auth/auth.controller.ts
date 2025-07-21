import { HttpCode, HttpStatus } from '@nestjs/common';
import { LoginDto } from './auth.service';
// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

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


//   @Post('login')
//   async login(@Body() user: LoginAuthDto) {
//     return this.authService.login(user);
//   }
// }
