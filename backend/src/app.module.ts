import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import { PrismaService } from './services/prisma.service';
import { OriginsController } from './controller/origins.controller';
import { OriginsService } from './services/origins.service';

@Module({
  imports: [],
  controllers: [AppController, OriginsController],
  providers: [AppService, PrismaService, OriginsService],
})
export class AppModule {}
