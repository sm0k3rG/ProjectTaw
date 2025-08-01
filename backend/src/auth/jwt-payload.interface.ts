// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
  sub: number;       // El 'sub' generalmente se usa para el ID del usuario
  email: string;     // El email del usuario
  rol: string;       // El rol del usuario (ej. 'USER', 'ADMIN')
}
