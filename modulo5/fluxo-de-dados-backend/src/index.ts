import express, { Request, Response, Express, request } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
import {arryProducts} from "./data"


const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1

// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método GET no path “/test” que retorna uma mensagem genérica avisando que a API está funcional. 

app.get("/teste", (request: Request, response: Response) => {
    response.send("API está funcionando !!🥳");
  });

// Exercício 2
// Crie um arquivo chamado data.ts que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). Popule manualmente o array com pelo menos 3 produtos.

// Exercício 3
// Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

app.post("/cria-produto", (request: Request, response: Response) => {
   try{
      const name = request.body.name
      const price = request.body.price

      if(!name) throw new Error ("Tem algo errado")
      const newProduct = {
         id:generateId(),
         name,
         price
      }

      arryProducts.push(newProduct)
      response.status(200).send(arryProducts)

   } catch (error:any) {
      response.end(error.message)

   }
 });
// Exercício 4
// Crie um endpoint que retorna todos os produtos.
app.get("/retorna-produto", (request: Request, response: Response) => {
   try{
      if(!arryProducts) throw new Error('Erro')
      response.status(200).send(arryProducts)

   } catch (error:any) {
      response.end(error.message)

   }
 });
// Exercício 5
// Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.
app.put("/edita-produto", (request: Request, response: Response) => {
   try{
      const name = request.body.name
      const price = request.body.price
      

   } catch (error:any) {
      response.end(error.message)

   }
 });

// Exercício 6
// Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.
app.delete("/deleta-produto/:id", (request: Request, response: Response) => {
   try{
      const produtoId = request.params.id
      if(!produtoId) throw new Error('Erro')
      const produtos = arryProducts.map((produto) => {
         if(produto.id === produtoId){
            return{
               ...produto, 
               produtos:[],
            }
         }
         return produto
      })
      response.status(200).send(produtos)

   } catch (error:any) {
      response.end(error.message)

   }
 });

// Exercício 7
// Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados fluxos de validação dos dados recebidos (name e price)
// erro caso um ou nenhum deles forem recebidos
// erro caso name seja diferente de string
// erro caso price seja diferente de number
// erro caso price seja igual ou menor que 0
// erro caso algo inesperado aconteça

app.post("/cria-produto", (request: Request, response: Response) => {
   try{
      const name = request.body.name
      const price = request.body.price

      if(!name || !price) throw new Error ("Precisa declar ambos os campos 'name' e 'price'")

      if(typeof name !== "string") throw new Error ("O campo 'name' deve ser uma string")

      if(typeof price !== "number") throw new Error ("O campo 'price' deve ser uma number")

      if( price >= 0) throw new Error ("O campo 'price' deve ser maior que zero")

      const newProduct = {
         id:generateId(),
         name,
         price
      }

      arryProducts.push(newProduct)
      response.status(200).send(arryProducts)

   } catch (error:any) {
      response.end(error.message || "Algo inesperado aconteceu")

   }
 });




// Exercício 8
// Exercício 9
// Refatore o endpoint do exercício 6 (deletar produto) para que sejam implementados fluxos de validação dos dados recebidos

// Exercício 10






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});