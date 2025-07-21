import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, UseGuards, Request, ForbiddenException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from '@prisma/client';
import { PedidoService } from './pedido.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    return this.pedidoService.create(createPedidoDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('usuario/:id')
  async obtenerPedidos(
    @Param('id', ParseIntPipe) usuarioId: number,
    @Request() req,
  )
  {
    if (req.user.id !== usuarioId) {
      throw new ForbiddenException('No puedes acceder a pedidos de otro usuario.');
    }
    return this.pedidoService.obtenerPedidosDelUsuario(usuarioId)
  }
}