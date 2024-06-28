/*
*
* @author Marco Matteo
* @version 1.0
* @date 2024-06-28
* @description The is the Backend to my Full-Stack Password-Manager. It is written in TypeScript and uses the NestJs Framework.
*
 */


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'node:fs';
import * as process from 'node:process';

// This is the main file that starts the server
async function bootstrap() {
  // This is the configuration for the HTTPS server
  const httpsOptions = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt'),
    passphrase: process.env.HTTPS_KEY_PASSPHRASE,
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  // This starts the server on port 8000
  await app.listen(8000);
}
bootstrap().then(() => {
  console.log('Server started on https://localhost:8000');
});
