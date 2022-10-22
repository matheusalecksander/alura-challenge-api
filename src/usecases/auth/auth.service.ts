import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IAuth } from 'src/domain/auth/interfaces/auth.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService implements IAuth {
  constructor(private readonly usersService: UsersService) {}
  
  async login(email: string, password: string): Promise<string> {
    const usuario = await this.usersService.findByEmail(email);

    if (usuario.password !== password) {
      throw new BadRequestException("Senha inválida");
    }

    return "token-usuário"
  }

  async register(user: User) {
    return true;
  }
}
