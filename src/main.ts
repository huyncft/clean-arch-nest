import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.setGlobalPrefix('v1');

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Security
  app.use(helmet());

  // Logger
  app.useLogger(app.get(Logger));

  // CORS
  app.enableCors();

  await app.listen(process.env.PORT || 3302);
  console.log('🚀 App running in port 🔥', process.env.PORT);
}
bootstrap();
