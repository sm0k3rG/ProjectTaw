import { Controller, Get, Post, Body, Req, Param, ParseIntPipe, UseGuards, Request, Patch } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from '@prisma/client';
import { PedidoService } from './pedido.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}
  
  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    return this.pedidoService.crearPedido(createPedidoDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get(':id/propio')
  async getPedidoPropio(
    @Param('id', ParseIntPipe) pedidoId: number,
    @Request() req,
  ) {
    const usuarioId = req.user.id; // asumiendo que JwtAuthGuard pone el payload en req.user
    return this.pedidoService.verPedidoPropio(pedidoId, usuarioId);
  }

    //@UseGuards(JwtAuthGuard)
    @Patch(':id/cancelar/propio')
    async cancelarPedidoPropio(
      @Param('id', ParseIntPipe) pedidoId: number,
      @Body('usuarioId', ParseIntPipe) usuarioId: number // reemplazar por JWT si usas auth
      ) {
    return this.pedidoService.cancelarPedidoPropio(pedidoId, usuarioId);
  }
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
    @Patch(':id/cancelar/admin')
    async cancelarPedidoAdmin(
      @Param('id', ParseIntPipe) pedidoId: number,
      ) {
    return this.pedidoService.cancelarPedidoAdmin(pedidoId);
  }

  @Get('/registrados')
  async verPedidosRegistrados() {
    return this.pedidoService.verPedidosRegistrados();
  }


    @Get('historial')
    // @UseGuards(JwtAuthGuard)
    async obtenerHistorial(@Req() req) {
      const userId = req.user.userId;
      console.log("entro al backend jaja")
      return this.pedidoService.obtenerHistorialPedidos(userId);
    }

}