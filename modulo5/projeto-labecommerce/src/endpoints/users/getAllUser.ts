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

    const users = await connection("labecommerce_purchases")
      .select(
        "labecommerce_users.id  as user_id",
        "labecommerce_users.name as user_name",
        "labecommerce_users.email as user_email",
        "labecommerce_products.id as product_id",
        "labecommerce_products.name as product_name",
        "labecommerce_products.image_url as product_image_url",
        "labecommerce_products.price as product_price",
        "labecommerce_purchases.id as purchase_id",
        "labecommerce_purchases.quantity as purchase_quantity",
        "labecommerce_purchases.total_price as purchase_total_price"
      )
      .from("labecommerce_users")
      .leftJoin("labecommerce_purchases", function () {
        this.on("labecommerce_purchases.user_id", "=", "labecommerce_users.id");
      })
      .leftJoin("labecommerce_products", function () {
        this.on(
          "labecommerce_purchases.product_id",
          "=",
          "labecommerce_products.id"
        );
      })
      // usei para ver com estava o query
      // .toSQL()
      // .toNative()
      .limit(size)
      .offset(offset);

    response.status(200).send(users);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
};
