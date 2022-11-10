import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async signUp(user: user){
        await BaseDatabase.connection("Cookenu_user")
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }

}