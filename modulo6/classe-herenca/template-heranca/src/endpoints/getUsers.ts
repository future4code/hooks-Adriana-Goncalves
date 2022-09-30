import { Request, Response } from "express"
import { UserDataBase } from "../database/UserDataBase"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        //instacia
        const userDataBase = new UserDataBase()
        const result = await userDataBase.getAllUsers()
        res.status(200).send({ users: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}