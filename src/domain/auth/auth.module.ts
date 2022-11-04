import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/usecases/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthService, JwtService]
})
export class AuthModule {}
