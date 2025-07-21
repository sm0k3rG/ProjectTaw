import { Body, Controller, Post,Patch,Param,ParseIntPipe,Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { DireccionService } from '../direccion/direccion.service';


@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService,
              private direccionService :DireccionService,
  ) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.AuthService.register(dto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.AuthService.login(loginDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.AuthService.solicitarRecuperacionContrasena(dto);
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.AuthService.restablecerContrasena(dto);
  }
  @Patch('editar/:id')
  editarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto
  ) {
    return this.AuthService.editarUsuario(id, dto);
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
