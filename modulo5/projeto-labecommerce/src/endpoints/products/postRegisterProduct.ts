import { Request, Response } from "express";
import { Product } from "../../type/type";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../../data/connection";

// Cadastro de produto
export const postRegisterProduct = async (
  request: Request,
  response: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    const name = request.body.name;
    const price = request.body.price;
    const imageUrl = request.body.imageUrl;

    // verificação de que todos os campos foram passados
    if (!name) {
      throw new Error("Você deve passar um nome 😢");
    }
    if (!price) {
      throw new Error("Você deve passar um preço 😢");
    }

    if (!imageUrl) {
      throw new Error("Você deve passar uma url de imagem 😢");
    }

   //  verificação de que os campos não podem ser vazio
   //  if (name.value === "") {
   //    throw new Error("O campo 'name' não pode ser vazio, passe um nome 😢");
   //  }
   //  if ((price.value !== " ")) {
   //    throw new Error("O campo 'price' não pode ser vazio, passe um preço 😢");
   //  }
   //  if ((imageUrl.value !== " ")) {
   //    throw new Error(
   //      "O campo 'imageUrl' não pode ser vazio, passe uma url de imagem 😢"
   //    );
   //  }

    // verificação de que os campos são string
    if (typeof name !== "string")
      throw new Error("O campo 'nome' deve ser uma string 🔒");

    if (typeof price !== "number")
      throw new Error("O campo 'price' deve ser um number 🔒");

    if (typeof imageUrl !== "string")
      throw new Error("O campo 'imageUrl' deve ser uma string 🔒");

    // logica do Endpoint
    const newUser: Product = {
      id: uuidv4(),
      name: name,
      price: price,
      imageUrl: imageUrl,
    };

    await connection("labecommerce_products").insert({
      id: newUser.id,
      name: newUser.name,
      price: newUser.price,
      image_url: newUser.imageUrl,
    });
    response.status(200).send("Produto criado com sucesso 😀 !! ");
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
};
