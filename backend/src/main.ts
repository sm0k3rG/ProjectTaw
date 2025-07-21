import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importar ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir peticiones desde el frontend
  app.enableCors({
    origin: 'http://localhost:4200', // URL del frontend Angular
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  

  // esto lo hizo el brayan
  // // Aplicar ValidationPipe globalmente para todas las rutas
  // app.useGlobalPipes(new ValidationPipe({
  //   transform: true,  // Transforma los parámetros de la consulta (por ejemplo, de string a number)
  //   whitelist: true,  // Elimina las propiedades no decoradas en el DTO
  // }));
  

  // Escuchar el puerto desde la variable de entorno o el puerto por defecto (3000)
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Servidor corriendo en: http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
