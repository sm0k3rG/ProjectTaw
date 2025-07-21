import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Request, ForbiddenException, Patch } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from '@prisma/client';
import { PedidoService } from './pedido.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}
  
  @UseGuards(JwtAuthGuard)
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
    @UseGuards(JwtAuthGuard)
    @Patch(':id/cancelar')
    async cancelarPedido(
      @Param('id', ParseIntPipe) pedidoId: number,
      @Body('usuarioId', ParseIntPipe) usuarioId: number // reemplazar por JWT si usas auth
      ) {
    return this.pedidoService.cancelarPedidoPropio(pedidoId, usuarioId);
  }
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
    @Patch(':id/cancelar')
    async cancelarPedidoAdmin(
      @Param('id', ParseIntPipe) pedidoId: number,
      ) {
    return this.pedidoService.cancelarPedidoAdmin(pedidoId);
  }
}