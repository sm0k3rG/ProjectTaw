import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
      signOptions: { 
        expiresIn: process.env.JWT_EXPIRES_IN || '24h' 
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {} 


// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { EmailModule } from '../email/email.module';
// import { DireccionService } from '../direccion/direccion.service';
// import { SucursalModule } from '../sucursal/sucursal.module';


// @Module({
//   controllers: [AuthController],
//   providers: [AuthService, PrismaService, DireccionService],
//   imports: [EmailModule, SucursalModule],
// })
// export class AuthModule {}