import { User } from "@prisma/client";

export interface IUsersService {
    create: (user: User) => Promise<boolean>;
    login: (email: string, password: string) => Promise<string>;
}
