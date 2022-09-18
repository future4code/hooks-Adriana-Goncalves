import { Request, Response } from "express";
import { connection } from "../../data/connection";

// Pega todos os usuário
export const getAllUser = async (
  request: Request,
  response: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let size = 5;
    let page = Number(request.query.page);
    
    // paginação
    let offset = size * (page - 1);

    if (isNaN(page) || page < 1) {
      page = 1;
    }

    const users = await connection("labecommerce_users")
      .orderBy("name")
      .limit(size)
      .offset(offset);

    response.status(200).send(users);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
};
