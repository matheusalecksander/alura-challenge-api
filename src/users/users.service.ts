import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IUsersService } from './domain/users.service.interface';
import { UsersRepository } from './infra/users.repository';

@Injectable()
export class UsersService implements IUsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async create(user: User): Promise<boolean> {
        const result = await this.usersRepository.create(user);

        return result;
    }

    async login(email: string, password: string): Promise<string> {
        const usuario = await this.usersRepository.getByEmail(email);

        return "token-usuário"
    }
}
