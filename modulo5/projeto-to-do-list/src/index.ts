import express, { Request,  Response } from "express";
import cors from "cors";
import connection from "./data/connection";
import { User, Task } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

const EhUmEmailValido = (email: string): boolean => {
  const regExEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
  return regExEmail.test(email);
};

// 1. Criar usuário
app.post("/user", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const name = request.body.name;
    const nickname = request.body.nickname;
    const email = request.body.email;

    // verificação
    if (!name) {
      throw new Error("Você deve passar um nome 😢");
    }
    if (!nickname) {
      throw new Error("Você deve passar um apelido 😢");
    }
    if (!email) {
      throw new Error("Você deve passar um email 😢");
    }
    if (!EhUmEmailValido(email)) {
      throw new Error("O campo email precisa de um email valido 😢");
    }

    if (typeof name !== "string")
      throw new Error("O campo 'nome' deve ser uma string 🔒");

    if (typeof nickname !== "string")
      throw new Error("O campo 'nickname' deve ser uma string 🔒");

    if (typeof email !== "string")
      throw new Error("O campo 'email' deve ser uma string 🔒");

    const newUser: User = {
      id: Number(Date.now()),
      name: name,
      nickname: nickname,
      email: email,
    };

    await connection.raw(`
    INSERT INTO TodoListUser( id, name, nickname, email)
    VALUES(${newUser.id}, "${newUser.name}","${newUser.nickname}", "${newUser.email}")
    `);
    response.status(200).send("Usuário criado com sucesso 😀 !! ");
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});

// 2. Pegar usuário pelo id

app.get("/user/:id", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const id =  request.params.id;
    if (id !== "") {
      const user = await connection.raw(`
        SELECT * FROM TodoListUser
        WHERE id = "${id}";
        `);
      response.status(200).send(user[0]);
      return;
    }
    const user = await connection.raw(`
      SELECT * FROM TodoListUser;
      `);

    response.status(200).send(user[0]);
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});

// 3. Editar usuário
app.put("/user/edit/:id", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const id = request.params.id;
    const name = request.body.name;
    const nickname = request.body.nickname;

    const user = await connection.raw(`
    SELECT * FROM TodoListUser
    WHERE id = "${id}";
    `);
    if (user[0].length === 0) {
      throw new Error("Usuário não encontrado");
    }
    if (!name) {
      throw new Error("Passe um novo nome");
    }
    if (!nickname) {
      throw new Error("Passe um novo apelido");
    }
    await connection.raw(`
    UPDATE TodoListUser
    SET name = "${name}"
    WHERE id = "${id}"
    `);

    await connection.raw(`
    UPDATE TodoListUser
    SET nickname  = "${nickname}"
    WHERE id = "${id}"
    `);
    response.status(200).send("Nome é apelido alterado ");
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});

// 4. Criar tarefa
const FormataStringData = (data: string): Date => {
    let day = data.split("/")[0];
    let month = data.split("/")[1];
    let year = data.split("/")[2];
    return new Date (Number(year), Number(month)-1, Number(day));
    // return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
  };

app.post("/task/:id", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const title = request.body.title;
    const description = request.body.description;
    let limitDate = request.body.limitDate;
    const creatorUserId = request.body.creatorUserId;

    // verificação
    if (!title) {
      throw new Error("Você deve passar um titulo  😢");
    }
    if (!description) {
      throw new Error("Você deve passar uma descrição 😢");
    }
    if (!limitDate) {
      throw new Error("Você deve passar uma data DD/MM/YYYY 😢");
    }
    if (!creatorUserId) {
      throw new Error("Você deve passar um ID valido 😢");
    }

    limitDate = FormataStringData(limitDate);

    const newUser: Task = {
      id: Number(Date.now()),
      title: title,
      description: description,
      limitDate: limitDate,
      creatorUserId: creatorUserId,
    };

    await connection.raw(`
      INSERT INTO TodoListTask ( id, title , description, limit_date,creator_user_id )
      VALUES(${newUser.id}, "${newUser.title}","${newUser.description}", "${newUser.limitDate.toISOString().split('T')[0]}", "${newUser.creatorUserId}")
      `);
    response.status(200).send("Tarefa criada com sucesso 😀 !! ");
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});

// 5. Pegar tarefa pelo id
app.get("/task/:id", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const id =  request.params.id;
    if (id !== "") {
      const user = await connection.raw(`
        SELECT * FROM TodoListTask
        WHERE id = "${id}";
        `);
      response.status(200).send(user[0]);
      return;
    }
    const user = await connection.raw(`
      SELECT * FROM TodoListTask;
      `);

    response.status(200).send(user[0]);
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
