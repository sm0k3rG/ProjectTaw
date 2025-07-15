import { IsInt, IsNotEmpty, IsArray } from 'class-validator';
import { LineaDePedido } from '@prisma/client';  // Asegúrate de importar la entidad correctamente

export class CreatePedidoDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsInt()
  @IsNotEmpty()
  direccionId: number;

  @IsArray()
  @IsNotEmpty()
  lineasDePedido: LineaDePedido[];
}
