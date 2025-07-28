import { Body, Controller, Param, ParseIntPipe, Patch , Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { EliminarCuentaDto } from 'src/auth/dto/eliminar-cuenta.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Patch(':id')
  async editarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: { nombre?: string; email?: string; telefono?: string },
  ) {
    return this.usersService.editarUsuario(id, data);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('eliminar-cuenta')
  async eliminarCuenta(@GetUser('id') userId: number, @Body() dto: EliminarCuentaDto) {
    return this.usersService.eliminarCuentaUsuario(userId, dto.contrasena);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id/desactivar')
  async desactivarUsuario(
    @GetUser('id') adminId: number,
    @Param('id', ParseIntPipe) targetUserId: number
  ) {
    return this.usersService.administrarUsuario(adminId, targetUserId, 'desactivar');
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id/eliminar')
  async eliminarUsuario(
    @GetUser('id') adminId: number,
    @Param('id', ParseIntPipe) targetUserId: number
  ) {
    return this.usersService.administrarUsuario(adminId, targetUserId, 'eliminar');
  }
}
