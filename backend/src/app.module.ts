import { DireccionModule } from './direccion/direccion.module';
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
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { AuditoriaModule }         from './auditoria/auditoria.module';
import { DireccionModule } from './direccion/direccion.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule, 
    ProductosModule, 
    CategoriasModule, 
    ProductoSucursalModule, 
    OfertaModule, 
    SucursalModule, 
    AuthModule, 
    UsuarioModule, 
    PedidoModule, 
    NotificationsModule, 
    EstadisticasModule,
    AuditoriaModule,
    DireccionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

// import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';
// import { PrismaService } from './prisma/prisma.service';
// //import { AuditService } from './audit/audit.service';
// //import { SucursalModule } from './sucursal/sucursal.module';


// @Module({
//   controllers: [AuthController],
//   providers: [AuthService, PrismaService],
//   //imports: [SucursalModule],

export class AppModule {}

