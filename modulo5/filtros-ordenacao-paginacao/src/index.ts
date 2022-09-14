import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./data/connection"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/user", async (request: Request, response: Response) => {
    let statusCode = 400;
    try {
      let nome = request.query.nome as string;
  
      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name 
      LIKE '%${nome}%';
      `)
     
      response.status(200).send(result[0])
  
    } catch (error: any) {
      response.status(statusCode).send(error.message);
    }
  });
  app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
  });