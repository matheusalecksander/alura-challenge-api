import { User } from "@prisma/client";

export interface IUsersRepository {
    create: (user: User) => Promise<User>;
    getByEmail: (email: string) => Promise<User | null>;
}