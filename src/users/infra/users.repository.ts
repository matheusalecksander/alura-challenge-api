import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { IUsersRepository } from "../domain/users.repository.interface";

@Injectable()
export class UsersRepository implements IUsersRepository {
  async create(user: User): Promise<boolean> {
    return true;
  };

  async getByEmail(email: string): Promise<User> {
    return null;
  };
}