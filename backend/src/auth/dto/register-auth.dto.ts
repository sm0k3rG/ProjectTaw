import {
        IsEmail,
        IsNotEmpty,
        MaxLength,
        MinLength,
        IsString,
        IsArray,
        ValidateNested
      } from 'class-validator';
      import { Type } from 'class-transformer';
      
      class DireccionDto {
        @IsNotEmpty()
        @IsString()
        calle: string;
      
        @IsNotEmpty()
        @IsString()
        numero: string;
      
        @IsNotEmpty()
        @IsString()
        comuna: string;
      
        @IsNotEmpty()
        @IsString()
        region: string;
      }
      
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
      
        @IsNotEmpty()
        @IsString()
        rut: string;
      
        @IsNotEmpty()
        @IsString()
        tarjetas: string;
      
        @IsArray()
        @ValidateNested({ each: true })
        @Type(() => DireccionDto)
        direcciones: DireccionDto[];
      }
      