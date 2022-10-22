import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IAuth } from 'src/domain/auth/interfaces/auth.interface';
import { ILoginQuery } from 'src/domain/auth/interfaces/login.query';
import { UsersQuery } from '../../domain/users/query/users.query';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService implements IAuth {
  constructor(private readonly usersService: UsersService) {}
  
  async login(email: string, password: string): Promise<ILoginQuery> {
    const usuario = await this.usersService.findByEmail(email);

    if (usuario.password !== password) {
      throw new BadRequestException("Senha inválida");
    }

    const userQuery = UsersQuery.make({
      email: usuario.email,
      id: usuario.id,
      name: usuario.name,
    })

    const result: ILoginQuery = {
      user: userQuery,
      token: "token-usuário"
    }

    return result;
  }

  async register(user: User): Promise<UsersQuery> {
    const result = await this.usersService.create(user);

    return result;
  }
}
