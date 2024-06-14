import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import { PrismaService } from './services/prisma.service';
import { OriginsController } from './controller/origins.controller';
import { OriginsService } from './services/origins.service';
import { UsersController } from './controller/users.controller';
import { UsersService } from './services/users.service';
import { PasswordController } from './controller/password.controller';
import { PasswordService } from './services/password.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    OriginsController,
    UsersController,
    PasswordController,
  ],
  providers: [
    AppService,
    PrismaService,
    OriginsService,
    UsersService,
    PasswordService,
  ],
})
export class AppModule {}
