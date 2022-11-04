import { IUserQuery } from "src/domain/users/interfaces/user.query";

export interface ILoginQuery {
  user: {
    id: string;
    name: string;
  };
  token: string;
}
