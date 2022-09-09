import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// Crie um endpoint de busca de usuários cadastrados. Este endpoint deve permitir a busca por partes do nome. Caso nenhum valor de busca seja recebido, retornamos todos os usuários.

app.get("/funcionarios", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const search = request.query.search;

    if (search) {
      const funcionario = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE nome = "${search}"
      `);
      response.status(200).send(funcionario);
    }
    const funcionario = await connection.raw(`
    SELECT * FROM Funcionarios`);

    response.status(200).send(funcionario[0]);
  } catch (error: any) {
    response.status(errorCode).send(errorCode);
  }
});

// Exercício 2
// Desenvolva um endpoint que cria um novo usuário e retorna as informações do mesmo. A id do usuário deve ser gerada automaticamente pela API.

const EhUmEmailValido = (email: string):boolean =>  {
  const regExEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
  return regExEmail.test(email);
}
app.post("/cria-funcionarios", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const nome = request.body.nome;
    const email = request.body.email;
    // Validação / name e email devem existir.
    if (!nome || !email)
      throw new Error("Precisa declarar os campos de nome e email");

    // Validação / name e email devem ser do tipo string.
    if (typeof nome !== "string")
      throw new Error("O campo 'nome' deve ser uma string");
    if (typeof email !== "string")
      throw new Error("O campo 'email' deve ser uma string");

    if(!EhUmEmailValido(email)){
      throw new Error("O campo email deve ser valido");
    }
    const novoFuncionario = {
      id: Number(Date.now()),
      nome: nome,
      email: email
    };
  
    await connection.raw(`
    INSERT INTO Funcionarios (id, nome, email)
    VALUES(${novoFuncionario.id}, "${novoFuncionario.nome}", "${novoFuncionario.email}")
    `);
    response.send("Novo funcionario criado com sucesso");
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

// Exercício 3
// Crie um endpoint que edita o e-mail de um determinado usuário.

app.put("/funcionarios/edita-email/:id", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const id = Number(request.params.id);
    const email = request.body.email
    const funcionarios = await connection.raw(`
    SELECT *FROM Funcionarios
    WHERE id = ${id}
    `);
    if (funcionarios[0].length === 0) {
      throw new Error("Funcionario não encontrado ");
    }
    if (!email) {
      throw new Error("Passe um novo email📧");
    }
    if (typeof email !== "string")
      throw new Error("O campo 'email' deve ser uma string");

    if(!EhUmEmailValido(email)){
      throw new Error("O campo do email deve possuir um email valido");
    }
    await connection.raw(`
    UPDATE Funcionarios
    SET email = "${email}"
    WHERE id = ${id}
    `);
    response.status(200).send("Email alterado com sucesso 🌈 !!");
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});
// Exercício 4
// Construa um endpoint que deleta um determinado usuário.

app.delete("/funcionario/:id", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const id = Number(request.params.id);
    const funcionario = await connection.raw(`
    SELECT * FROM Funcionarios 
    WHERE id = ${id}
    `);
    if (funcionario[0].length === 0) {
      throw new Error("Funcionario não encontrado");
    }

    await connection.raw(`
    DELETE  FROM Funcionarios
    WHERE id = ${id}
    `);
    response.status(200).send("Funcionario deletado");
  } catch (error: any) {
    response.status(errorCode).send(error.message);
  }
});