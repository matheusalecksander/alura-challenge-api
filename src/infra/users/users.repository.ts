import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { IUsersRepository } from "src/domain/users/interfaces/users.repository.interface";
import { prismaClient } from "../../utils/database/prisma";

@Injectable()
export class UsersRepository implements IUsersRepository {
  async create(user: User): Promise<User> {
    return user;
  };

  async getByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findUnique({
      where: {
        email
      }
    });

    return user;
  };
}