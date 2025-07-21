// src/auth/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';  // Usamos el guard base de Passport

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // Este guard se activa automáticamente en las rutas donde lo usamos
}
