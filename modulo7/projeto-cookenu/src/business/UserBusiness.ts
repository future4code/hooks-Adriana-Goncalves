import { UserDatabase } from "../database/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
} from "../error/customError";
import { user, UserInputDTO } from "../model/user";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const userDataBase = new UserDatabase();
const tokenGenerator = new TokenGenerator();

export class UserBusiness {
  async signUp(user: UserInputDTO) {
    try {
      const { name, email, password } = user;

      if (!name) {
        throw new InvalidName();
      }
      if (!email || !email.includes("@")) {
        throw new InvalidEmail();
      }
      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id: string = IdGenerator();

      const newUser: user = {
        id,
        name,
        email,
        password,
      };

      await userDataBase.signUp(newUser);
      const token = tokenGenerator.generateToken({id});
      
      return token;

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
