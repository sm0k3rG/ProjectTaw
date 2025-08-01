import { Controller, Get } from "@nestjs/common";
import { EstadisticasService } from "./estadisticas.service";

@Controller('estadisticas')
export class EstadisticasController {
  constructor(private readonly service: EstadisticasService) {}

  @Get('ventas-totales')
  getVentasTotales() {
    return this.service.cantidadVentasTotales();
  }

 

  @Get('usuarios')
  getCantidadUsuarios() {
    return this.service.cantidadUsuarios();
  }

  @Get('productos-mas-vendidos')
  getProductosMasVendidos() {
    return this.service.productosMasVendidos();
  }

  @Get('productos-menos-vendidos')
  getProductosMenosVendidos() {
    return this.service.productosMenosVendidos();
  }
}
