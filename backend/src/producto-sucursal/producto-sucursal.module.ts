import { Module } from '@nestjs/common';
import { ProductoSucursalService } from './producto-sucursal.service';
import { ProductoSucursalController } from './producto-sucursal.controller';

@Module({
  providers: [ProductoSucursalService],
  controllers: [ProductoSucursalController]
})
export class ProductoSucursalModule {}
