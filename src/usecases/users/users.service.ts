import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { IUsersService } from 'src/domain/users/interfaces/users.service.interface';
import { UsersRepository } from '../../infra/users/users.repository';

@Injectable()
export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async create(user: User): Promise<boolean> {
    const result = await this.usersRepository.create(user);

    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.usersRepository.getByEmail(email);

    if (!result) {
      throw new NotFoundException("Email inválido");
    }

    return result;
  }
}
