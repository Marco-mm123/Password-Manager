import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'node:fs';
import * as process from 'node:process';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt'),
    passphrase: process.env.HTTPS_KEY_PASSPHRASE,
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.listen(8000);
}
bootstrap().then(() => {
  console.log('Server started on https://localhost:8000');
});
