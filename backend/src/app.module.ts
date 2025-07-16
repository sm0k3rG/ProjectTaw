import { PedidoUsuarioModule } from './pedido-usuario/pedido-usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductoSucursalModule } from './producto-sucursal/producto-sucursal.module';
import { OfertaModule } from './oferta/oferta.module';
import { SucursalModule } from './sucursal/sucursal.module';

@Module({
  imports: [
    PedidoUsuarioModule,
    PrismaModule,
    ProductosModule,
    CategoriasModule,
    ProductoSucursalModule,
    OfertaModule,
    SucursalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
