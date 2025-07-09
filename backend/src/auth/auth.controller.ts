// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() user: RegisterAuthDto) {
    return this.authService.login(user);
  }

  @Post('login')
  async login(@Body() user: LoginAuthDto) {
    return this.authService.login(user);
  }
}
