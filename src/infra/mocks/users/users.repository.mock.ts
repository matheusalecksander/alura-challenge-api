import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { IUsersRepository } from "src/domain/users/interfaces/users.repository.interface";

@Injectable()
export class UsersRepositoryMock implements IUsersRepository {
  private readonly users: User[] = [
    {
      id: "some_random_id",
      email: 'john',
      password: 'changeme',
      name: 'someName'
    },
    {
      id: "some_random_id02",
      email: 'maria',
      password: 'guess',
      name: 'someName'
    },
  ];

  async create(user: User): Promise<User> {
    const userExists = await this.getByEmail(user.email);

    if(userExists) {
      throw new Error();
    }

    this.users.push(user);

    return user;
  };

  async getByEmail(email: string): Promise<User> {
    const userExists = this.users.find(user => user.email === email);

    if(!userExists) {
      return null;
    }

    return userExists;
  };
}
