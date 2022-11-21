import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

const userBusiness = new UserBusiness();
export class UserController {
  async signUp(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const newUser: UserInputDTO = {
        name: name,
        email: email,
        password: password,
      };
      const token = await userBusiness.signUp(newUser);

      response.status(200).send({ access_token: token });
    } catch (error) {
      response.status(400).send(error.message);
    }
  }
}
