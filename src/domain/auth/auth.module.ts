import { Module } from '@nestjs/common';
import { AuthService } from 'src/usecases/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/usecases/users/users.service';
import { UsersRepository } from 'src/infra/users/users.repository';

@Module({
  providers: [AuthService, UsersService, UsersRepository, JwtService],
})
export class AuthModule {}
