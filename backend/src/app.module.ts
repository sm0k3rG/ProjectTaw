import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './prisma/prisma.service';
//import { AuditService } from './audit/audit.service';
//import { SucursalModule } from './sucursal/sucursal.module';


@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  //imports: [SucursalModule],
})
export class AppModule {}
