import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Account, Transaction } from "./data";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/conta", (request: Request, response: Response) => {
    try{
        const name = request.body.name
        const cpf = request.body.cpf
        const birthDate = request.body.birthDate
        // Garante que todos os campos sejam passados 
        if (!name|| !cpf || !birthDate) throw new Error ("Campos faltando, por favor tente novamente")
        if (typeof name !== "string") throw new Error ("Campos 'name' deve ser uma string")
        if (typeof cpf !== "string") throw new Error ("Campos 'cpf' deve ser uma string")
        if (typeof birthDate !== "string") throw new Error ("Campos 'data de nascimento' deve ser uma string")

        if (cpf.length !== 11) throw new Error ("CPF incorreto")
        if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(birthDate))("Campos 'data de nascimento' deve ser uma string")

       
    } catch(error: any){
        response.status(400).end(error.message)

    }
  });


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});