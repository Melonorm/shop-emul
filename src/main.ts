import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT: number = 3100;

  const app = await NestFactory.create(AppModule);
  await app.listen(
      PORT,
      () => console.log(`Server started at ${PORT} port`));
}
bootstrap();
