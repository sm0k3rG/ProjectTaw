import { IsInt, IsNotEmpty, IsArray, IsOptional } from 'class-validator';
import { LineaDePedido } from '@prisma/client';  // Asegúrate de importar la entidad correctamente

export class CreatePedidoDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsInt()
  @IsNotEmpty()
  direccionId: number;

  @IsInt()
  @IsOptional()
  direccionRetiroId: number;

  @IsArray()
  @IsNotEmpty()
  lineasDePedido: LineaDePedido[];
}
