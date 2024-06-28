import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

// the standard controller for the app didn't remove because I don't mind it
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
