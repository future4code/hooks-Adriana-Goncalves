import { User } from "../models/User";
import BaseDataBase from "./baseDataBase";
import { TABLE_USERS } from "./tableNames";

export class UserDataBase extends BaseDataBase {
  public async getAllUsers() {
    const result = await BaseDataBase.connection(TABLE_USERS).select();
    return result;
  }
  public async createUser(user: User) {
    await BaseDataBase.connection(TABLE_USERS).insert({
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  }
  public async getUserById(id: string) {
    const result = await BaseDataBase.connection(TABLE_USERS)
    .select()
    .where({ id})

    return result;
  }
}
