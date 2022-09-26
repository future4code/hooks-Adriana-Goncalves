import { Request, Response } from "express";
import { connection } from "../../data/connection";

// Pega todos os usuário
export const getAllPurchaseUser = async (
  request: Request,
  response: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    const userId = request.params.user_id;

    const user = await connection(" labecommerce_users")
      .select(["id"])
      .where("id", userId);

    if (user.length === 0 || userId !== user[0].id) {
      throw new Error(" ID de usuário não encontrado 😢");
    }

    const users = await connection("labecommerce_purchases")
      .select(
        "labecommerce_purchases.id",
        "labecommerce_users.name",
        "labecommerce_products.name",
        "labecommerce_products.image_url",
        "labecommerce_products.price",
        "labecommerce_purchases.quantity",
        "labecommerce_purchases.total_price"
        
      )
      .from("labecommerce_purchases")
      .join("labecommerce_users", function () {
        this.on("labecommerce_purchases.user_id", "=", "labecommerce_users.id");
      })
      .join("labecommerce_products", function () {
        this.on(
          "labecommerce_purchases.product_id",
          "=",
          "labecommerce_products.id"
        );
      })
      .where("user_id", "=", userId);

    response.status(200).send(users[0]);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
};
