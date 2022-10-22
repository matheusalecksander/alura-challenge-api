import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/infra/users/users.repository';
import { UsersService } from 'src/usecases/users/users.service';

@Module({
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
