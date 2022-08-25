import express, { Request, Response, Express, request } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User,TYPE, users  } from "./data";


const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
// a. Qual método HTTP você deve utilizar para isso?
// 👉 Método get
// 👉 O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados
// a. Qual método HTTP você deve utilizar para isso?
// 👉 A entendia /users
app.get("/users", (request: Request, response: Response) =>{
    let errorCode = 400
    try {
        if(!users.length){
            errorCode = 404 
            throw new Error("Usuarios não encontrados, verificar a documentação")
        }
        response.status(200).send(users)

    } catch(error: any) {
        response.status(errorCode).send(error.message)
    }
})

// Exercício 2
// Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade type específica, recebendo apenas um type por vez. Após isso, responda:
// a. Como você passou os parâmetros de type para a requisição? Por quê?
// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
app.get("/users/type", (request: Request, response: Response) =>{
    let errorCode = 400
    try {
        const type = request.query.type as string
        if(!type) {
            errorCode = 404
            throw new Error ("Os campos devem ser especificados : 'NORMAL' ou 'ADMIN' ")
        }
        if(type.toLowerCase() !== TYPE.ADMIN.toLowerCase() && TYPE.NORMAL.toLowerCase()){
            errorCode = 404
            throw new Error ("Os campos devem ser especificados : 'NORMAL' ou 'ADMIN' ")
        }

        const userPropriedaType = users.filter(user => user.type.toLowerCase() === type.toLowerCase())

        response.status(200).send(users)

    } catch(error: any) {
        response.status(errorCode).send(error.message)
    }
})

// Exercício 3
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.get("/users/nome", (request: Request, response: Response) =>{
    let errorCode = 400
    try {
        const name = request.query.name as string

        const user : User| undefined = users.find((user) => user.name === name)

        if (!user) {
            errorCode = 404 
            throw new Error("Nome não encontrado")
        }
        response.status(200).send(user)
    } catch(error: any) {
        response.status(errorCode).send(error.message)
    }
})
// Exercício 4
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.
// a. Mude o método do endpoint para PUT. O que mudou? 
// 👉 Não mudou nada 
// b. Você considera o método PUT apropriado para esta transação? Por quê?
// 👉 Não, acredito que o método POST sejá o mais apropriado para criar algo

app.post("/create-users", (request: Request, response: Response) =>{
    let errorCode = 400
    try {
        const id = request.body.id
        const name = request.body.name
        const email = request.body.email
        const type = request.body.type
        const age = request.body.age
        if (!id) {
            errorCode = 422
            throw new Error("ID deve ser um number")
        }
        if (!name) {
            errorCode = 422
            throw new Error("Name deve ser uma string")
        }
        if (!email) {
            errorCode = 422
            throw new Error("Email deve ser uma string")
        }
        if (!type) {
            errorCode = 422
            throw new Error("Type deve ser uma 'NORMAL' ou 'ADMIN'")
        }
        if (!age) {
            errorCode = 422
            throw new Error("Age deve ser um number")
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        response.send("Usuário criado")

    } catch(error: any) {
        response.status(errorCode).send(error.message)
    }
})
app.put("/create-users", (request: Request, response: Response) =>{
    let errorCode = 400
    try {
        const id = request.body.id
        const name = request.body.name
        const email = request.body.email
        const type = request.body.type
        const age = request.body.age
        if (!id) {
            errorCode = 422
            throw new Error("ID deve ser um number")
        }
        if (!name) {
            errorCode = 422
            throw new Error("Name deve ser uma string")
        }
        if (!email) {
            errorCode = 422
            throw new Error("Email deve ser uma string")
        }
        if (!type) {
            errorCode = 422
            throw new Error("Type deve ser uma 'NORMAL' ou 'ADMIN'")
        }
        if (!age) {
            errorCode = 422
            throw new Error("Age deve ser um number")
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        response.send("Usuário criado")

    } catch(error: any) {
        response.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});