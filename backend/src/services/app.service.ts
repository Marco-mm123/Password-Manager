import { Injectable } from '@nestjs/common';

// this is just the standard service that comes with the nestjs installation
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
