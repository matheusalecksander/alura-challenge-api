import { User } from "@prisma/client";

export interface IUsersRepository {
    create: (user: User) => Promise<boolean>;
    getByEmail: (email: string) => Promise<User | null>;
}