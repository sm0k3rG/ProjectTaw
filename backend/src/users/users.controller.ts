import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

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
}
