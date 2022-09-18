import { Request, Response } from "express"
import { Product, Purchases} from "../../type/type"
import { v4 as uuidv4 } from 'uuid';
import {connection} from "../../data/connection";

// Cadastro de produto
export const postRegisterPurchase = async(
   request: Request,
   response: Response
): Promise<void>  => {
   let statusCode = 400
   try {
      const userId = request.body.userId
      const productId = request.body.productId
      const quantity = Number(request.body.quantity)

      // validações 
         // 2 validações user_id existe / e product_id existe
         // quantidade <= 0 
      // calcular valor total
         // buscar no banco o valor do productId
      // inserir na tabela 
      // retornar valor total

        const user = await connection(" labecommerce_users")
        .select(["id"])
        .where( "id", userId)

        if(user.length === 0 || userId !== user[0].id){
            throw new Error(" ID de usuário não encontrado 😢");
        }

        const product = await connection(" labecommerce_products")
        .select(["id", "price"])
        .where( "id", productId)
      
        if(product.length === 0 || productId !== product[0].id){
            throw new Error(" ID do produto não encontrado 😢");
        }
        const totalPrice  = quantity * product[0].price 


        if(quantity <= 0 ){
            throw new Error("Valor incorreto, passe uma quantidade valida que seja maior que 0 😢");
        }

       const newUser: Purchases = {
        id: uuidv4(),
        userId :userId,
        productId: productId,
        quantity: quantity,
        totalPrice:totalPrice
      }

    
      await connection("labecommerce_purchases")
      .insert ({
         id: newUser.id,
         user_id :newUser.userId,
         product_id: newUser.productId,
         quantity: newUser.quantity,
         total_price: newUser.totalPrice
         
      })

      response.status(200).send("Produto criado com sucesso 😀 !! ")

   } catch (error: any) {
      response.status(statusCode).send(error.message)
   }
}