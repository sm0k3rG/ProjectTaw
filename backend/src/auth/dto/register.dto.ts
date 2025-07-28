import { IsEmail, IsNotEmpty, MinLength, IsBoolean } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  contrasena: string;

  @IsBoolean()
  terminosAceptados: boolean;
}
