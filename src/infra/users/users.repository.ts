import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { IUsersRepository } from "src/domain/users/interfaces/users.repository.interface";

@Injectable()
export class UsersRepository implements IUsersRepository {
  async create(user: User): Promise<User> {
    return user;
  };

  async getByEmail(email: string): Promise<User> {
    return null;
  };
}