import { User } from "@prisma/client";
import { UsersQuery } from "../query/users.query";

export interface IUsersService {
  create: (user: User) => Promise<UsersQuery>;
  findByEmail: (email: string) => Promise<User>;
}
