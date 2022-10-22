import { IUserQuery } from "src/domain/users/interfaces/user.query";

export interface ILoginQuery {
  user: IUserQuery;
  token: string;
}
