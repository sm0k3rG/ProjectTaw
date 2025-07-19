import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class RegisterAuthDto {
       @IsEmail()
        email: string;
    
        @MinLength(4)
        @MaxLength(12)
        contrasena: string;

        @IsNotEmpty()
        nombre: string;

        @IsNotEmpty()
        telefono: string;
}