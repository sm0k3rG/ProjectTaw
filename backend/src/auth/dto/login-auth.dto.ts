import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(4)
    @MaxLength(19)
    @IsNotEmpty()
    @IsString()
    contrasena: string;
}