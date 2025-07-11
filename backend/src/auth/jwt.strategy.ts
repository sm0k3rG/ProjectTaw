// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';  // Usamos passport-jwt para validar el JWT
import { ExtractJwt } from 'passport-jwt';  // Para extraer el JWT del encabezado Authorization
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Extraemos el JWT desde el encabezado Authorization como Bearer token
      secretOrKey: 'clave',  // La clave secreta para verificar el JWT
    });
  }

  // Este método se ejecuta después de la validación del token
  async validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email, rol: payload.rol };  // Retorna la información del usuario del payload
  }
}