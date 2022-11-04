import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './domain/auth/auth.module';
import { UsersModule } from './domain/users/users.module';
import { UsersRepository } from './infra/users/users.repository';
import { AppController } from './presentation/app/app.controller';
import { AuthController } from './presentation/auth/auth.controller';
import { UsersController } from './presentation/users/users.controller';
import { AuthService } from './usecases/auth/auth.service';
import { UsersService } from './usecases/users/users.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_TOKEN,
    }),
  ],
  controllers: [AppController, AuthController, UsersController],
  providers: [AuthService, UsersService, UsersRepository],
})
export class AppModule {}
