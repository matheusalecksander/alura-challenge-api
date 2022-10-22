import { User } from "@prisma/client";
import { UsersQuery } from "src/domain/users/query/users.query";
import { ILoginQuery } from "./login.query";

export interface IAuth {
  login: (email: string, password: string) => Promise<ILoginQuery>;
  register: (user: User) => Promise<UsersQuery>;
}
