import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './domain/users/users.module';
import { UsersRepository } from './infra/users/users.repository';
import { AppController } from './presentation/app/app.controller';
import { UsersController } from './presentation/users/users.controller';
import { UsersService } from './usecases/users/users.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [
    UsersService,
    UsersRepository,
  ],
})
export class AppModule {}
