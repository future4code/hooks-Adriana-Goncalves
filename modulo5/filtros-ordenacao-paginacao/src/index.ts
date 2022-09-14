import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./data/connection";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.
app.get("/user", async (request: Request, response: Response) => {
  let statusCode = 400;
  try {
    let nome = request.query.nome as string;
    if (!nome) {
      nome = "%";
    }
    const result = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${nome}%`
    );
    if (result.length < 1) {
      statusCode = 404;
      throw new Error("Nenhum usuário encontrado");
    }
    response.status(200).send(result);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
});

// b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por **tipo** de user. O tipo de user deve ser passado por **path params.**
app.get("/type/:inType", async (request: Request, response: Response) => {
  let statusCode = 400;
  try {
    let inType = request.params.inType as string;

    const result = await connection("aula48_exercicio").where(
      "type",
      "like",
      `${inType}`
    );
    response.status(200).send(result);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
});

//  Exercício 2
//  Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.
app.get("/order", async (request: Request, response: Response) => {
  let statusCode = 400;
  try {
    let sort = request.query.sort as string;
    // pelo quê o usúario quer ordenar

    let order = request.query.order as string;
    // escolher a ordem ASC ou DESC

    // Se não enviar nada, vai enviar por padrão o email
    if (!sort) {
      sort = "email";
    }

    if (sort === "TYPE") {
      sort = "type";
    }

    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    if (
      order &&
      order.toUpperCase() !== "ASC" &&
      order.toUpperCase() !== "DESC"
    ) {
      order = "ASC";
    }

    const result = await connection("aula48_exercicio").orderBy(sort, order);

    response.status(200).send(result);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
});

// Exercício 3
// Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.
app.get("/pagina", async (request: Request, response: Response) => {
  let statusCode = 400;
  try {
    let size = 5;
    let page = Number(request.query.page);

    // paginação 
    let offset = size * (page - 1);
    
    if (isNaN(page) || page < 1) {
        page = 1
     }

    const result = await connection("aula48_exercicio")
      .limit(size)
      .offset(offset);

    response.status(200).send(result);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
});

// Exercício 4
// Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:
// Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
// Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
// Caso o usuário não forneça número de página, deve começar na página 1
app.get("/funionalidades", async (request: Request, response: Response) => {
  let statusCode = 400;
  try {
    let nome = request.query.nome as string;
    let inType = request.query.inType as string;
    let sort = request.query.sort as string;
    let order = request.query.order as string;
    let size = 5;
    let page = Number(request.query.page);
    let offset = size * (page - 1);

    if (!nome) {
        nome = "%";
      }

    if (!sort) {
        sort = "name";
        order = "DESC"
      }

    if (isNaN(page) || page < 1) {
        page = 1
     }


    const result = await connection("aula48_exercicio")
      .where("name", "like", `%${nome}` ||`${inType}` )
      .orderBy(sort, order)
      .limit(size)
      .offset(offset);


      if (result.length < 1) {
        statusCode = 404
        throw new Error("Nenhum usuário encontardo")
     }
    response.status(200).send(result);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});


