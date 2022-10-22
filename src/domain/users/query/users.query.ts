import { IUserQuery } from "../interfaces/user.query";

export class UsersQuery {
  public id: string;
  public name: string;
  public email: string;

  private constructor({id, name, email}: IUserQuery) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  static make({
    id,
    name,
    email,
  }) {
    return new UsersQuery({ id, name, email })
  }
}