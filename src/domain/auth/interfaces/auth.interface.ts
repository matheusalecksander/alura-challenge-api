import { User } from "@prisma/client";

export interface IAuth {
  login: (email: string, password: string) => Promise<string>;
  register: (user: User) => Promise<boolean>;
}