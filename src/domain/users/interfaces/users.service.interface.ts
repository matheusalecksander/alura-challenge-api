import { User } from "@prisma/client";

export interface IUsersService {
  create: (user: User) => Promise<boolean>;
  findByEmail: (email: string) => Promise<User>;
}
