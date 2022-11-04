import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IAuth } from 'src/domain/auth/interfaces/auth.interface';
import { ILoginQuery } from 'src/domain/auth/interfaces/login.query';
import { UsersQuery } from '../../domain/users/query/users.query';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import "dotenv/config";

@Injectable()
export class AuthService implements IAuth {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  async login(email: string, password: string): Promise<ILoginQuery> {
    const usuario = await this.usersService.findByEmail(email);

    if (usuario.password !== password) {
      throw new BadRequestException("Senha inválida");
    }

    const payload = {
      name: usuario.name,
      id: usuario.id,
    }

    const token = this.jwtService.sign(payload, { secret: process.env.JWT_KEY});

    const result: ILoginQuery = {
      user: payload,
      token,
    }

    return result;
  }

  async register(user: User): Promise<UsersQuery> {
    const result = await this.usersService.create(user);

    return result;
  }
}
