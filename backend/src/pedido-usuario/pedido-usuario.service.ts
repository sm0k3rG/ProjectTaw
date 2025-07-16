import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedidoUsuarioService {
    constructor(private readonly prisma: PrismaService) {}    

    async findMany(id: number) {
        return await this.prisma.pedido.findMany({
            where: { usuario: {id: {equals: id}} }, include: { lineasDePedido: {include: { producto: true } } } ,
        });
    }
    
    
}
