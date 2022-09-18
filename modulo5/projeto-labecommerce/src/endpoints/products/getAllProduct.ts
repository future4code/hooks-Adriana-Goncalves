import { Request, Response } from "express"
import {connection} from "../../data/connection";

// Pega todos os usuário
export const getAllProduct = async(
   request: Request,
   response: Response
): Promise<void>  => {
   let statusCode = 400
   try {
      let search = request.query.search as string;
        // pelo quê o usúario quer ordenar
      let sort = request.query.sort as string;
        // escolher a ordem ASC ou DESC
      let order = request.query.order as string;
  
      if (!search) {
         search = "%";
       }

       if (!sort) {
         sort = "name";
       }

       if (
         order &&
         order.toUpperCase() !== "ASC" &&
         order.toUpperCase() !== "DESC"
       ) {
         order = "ASC";
       }

      const products = await connection("labecommerce_products")
      .select()
      .where("name", "like", `%${search}%`)
      .orderBy( sort, order)

      if (products.length < 1) {
         statusCode = 404;
         throw new Error(`O produto ${search} não encontrado encontrado 😢 `);
       }
      response.status(200).send(products)

   } catch (error: any) {
      response.status(statusCode).send(error.message)
   }
}