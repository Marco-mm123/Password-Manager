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
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '500s' },
    }),
  ],
  controllers: [
    AppController,
    OriginsController,
    UsersController,
    PasswordController,
    AuthController,
  ],
  providers: [
    AppService,
    PrismaService,
    OriginsService,
    UsersService,
    PasswordService,
    LocalStrategy,
    AuthService,
    JwtStrategy,
  ],
})
export class AppModule {}
