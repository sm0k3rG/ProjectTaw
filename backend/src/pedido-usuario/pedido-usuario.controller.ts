import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PedidoUsuarioService } from './pedido-usuario.service';

@Controller('pedido')
export class PedidoUsuarioController {
    constructor(private readonly pedidousuarioService: PedidoUsuarioService) {};

    @Get(':usuarioId')
    findOne(@Param('usuarioId') id: string) {
        return this.pedidousuarioService.findMany(+id);
    }
}
