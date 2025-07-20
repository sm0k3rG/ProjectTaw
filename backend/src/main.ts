import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AuthModule);
  await app.listen(3000);
}
bootstrap();

