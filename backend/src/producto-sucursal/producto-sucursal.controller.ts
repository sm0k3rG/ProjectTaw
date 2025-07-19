import { Body, Controller, Post, Put, Param, UseGuards, Get, Req, ParseIntPipe } from '@nestjs/common';
import { CreateProductoSucursalDto } from './dto/create-producto-sucursal.dto';
import { UpdateProductoSucursalDto } from './dto/update-producto-sucursal.dto';
import { ProductoSucursalService } from './producto-sucursal.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Rol } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('producto-sucursal')
export class ProductoSucursalController {
  constructor(private readonly productoSucursalService: ProductoSucursalService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post('visita/:productoId')
  async registrarVisita(
    @Param('productoId', ParseIntPipe) productoId: number,
    @Req() req: Request & { user: { id: number } },
  ) {
    const usuarioId = req.user.id;           // ← extraes el ID del usuario autenticado
    return this.productoSucursalService.registrarVisita(usuarioId, productoId);
  }



  @Post()
  async create(@Body() createProductoSucursalDto: CreateProductoSucursalDto) {
    return this.productoSucursalService.create(createProductoSucursalDto);
  }

  @Put(':productoId/:sucursalId')
  @Roles(Rol.Admin)  // Usamos el enum Rol para definir los roles permitidos
  @UseGuards(JwtAuthGuard, RolesGuard)  // Usamos ambos guards
  async update(
    @Param('productoId') productoId: number,
    @Param('sucursalId') sucursalId: number,
    @Body() updateDto: UpdateProductoSucursalDto,
  ) {
    return this.productoSucursalService.update(productoId, sucursalId, updateDto);
  }
   // Endpoint para reposicionar stock de un producto en una sucursal
  @Put('notificar/:productoId/sucursal/:sucursalId')
  async reposicionarStock(
    @Param('productoId') productoId: number,
    @Param('sucursalId') sucursalId: number,
    @Body('stockNuevo') stockNuevo: number,
  ): Promise<void> {
    await this.productoSucursalService.actualizarNotificarStock(productoId, sucursalId, stockNuevo);
  }

  @Get('reposicion/:productoId/sucursal/:sucursalId')
  async predecirReposicionStockPorSucursal(
    @Param('productoId') productoId: number,
    @Param('sucursalId') sucursalId: number,
  ): Promise<any> {
    try {
      // Llamar al servicio para obtener las predicciones por sucursal
      const predicciones = await this.productoSucursalService.predecirReposicionStockPorSucursal(productoId, sucursalId);
      
      // Retornar las predicciones
      return {
        success: true,
        data: predicciones,
      };
    } catch (error) {
      // Manejo de errores
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
