import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductoSucursalModule } from './producto-sucursal/producto-sucursal.module';
import { OfertaModule } from './oferta/oferta.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [PrismaModule, ProductosModule, CategoriasModule, ProductoSucursalModule, OfertaModule, SucursalModule, AuthModule, UsuarioModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
