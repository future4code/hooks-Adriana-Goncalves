import { app } from "./app"
import { getAllProduct } from "./endpoints/products/getAllProduct"
import { getAllUser } from "./endpoints/users/getAllUser"
import { postCreateuser } from "./endpoints/users/postCreateuser"
import { postRegisterProduct } from "./endpoints/products/postRegisterProduct"
import { postRegisterPurchase } from "./endpoints/purchases/postRegisterPurchase"
import { getAllPurchaseUser } from "./endpoints/purchases/getAllPurchaseUser"

// Cadastro de usuário - Endpoint que cria usuário
app.post("/users", postCreateuser)

// Busca por todos os usuários - Endpoint que pega todos os usuário
app.get("/users", getAllUser)

// Cadastro de produto - Endpoint que cadastra produto
app.post("/products",postRegisterProduct )

// Busca por todos os produtos - Endpoint que pega todos os produtos
app.get("/products", getAllProduct)

//  Registro de compra - 
app.post("/purchases", postRegisterPurchase)

//  Busca das compras de um usuário - 
app.get("/users/:user_id/purchases", getAllPurchaseUser)