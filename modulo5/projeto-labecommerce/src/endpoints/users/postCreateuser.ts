import { Request, Response } from "express";
import { User } from "../../type/type";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../../data/connection";
import transporter from "../../services/mailTransporter";

// função para validar o email
const EhUmEmailValido = (email: string): boolean => {
  const regExEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
  return regExEmail.test(email);
};

// Cadastro de usuário
export const postCreateuser = async (
  request: Request,
  response: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    const name = request.body.name.trim();
    const email = request.body.email.trim();
    const password = request.body.password.trim();

    // verificação de que todos os campos foram passados
    if (!name) {
      throw new Error("Você deve passar um nome 😢");
    }
    if (!email) {
      throw new Error("Você deve passar um email 😢");
    }
    if (!EhUmEmailValido(email)) {
      throw new Error("Você deve passar um email valido 😢");
    }
    if (!password) {
      throw new Error("Você deve passar uma senha 😢");
    }

    // verificação de que os campos não podem ser vazio
    if (name.value === "") {
      throw new Error("O campo 'name' não pode ser vazio, passe um nome 😢");
    }
    if (email.value === "") {
      throw new Error("O campo 'email' não pode ser vazio, passe um nome 😢");
    }
    if (password.value === "") {
      throw new Error(
        "O campo 'password' não pode ser vazio, passe um nome 😢"
      );
    }

    // verificação de que os campos são string
    if (typeof name !== "string")
      throw new Error("O campo 'nome' deve ser uma string 🔒");

    if (typeof email !== "string")
      throw new Error("O campo 'email' deve ser uma string 🔒");

    if (typeof password !== "string")
      throw new Error("O campo 'password' deve ser uma string 🔒");

    // logica do Endpoint
    const newUser: User = {
      id: uuidv4(),
      name: name,
      email: email,
      password: password,
    };

    await connection("labecommerce_users").insert({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
  
    });
    const send = await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Criação de Usuário",
      text: `Parabéns, seu usuário foi criado <3`,
      html: `<p>Parabéns ${name}, sua conta foi criada com sucesso </p>`,
    });
    console.log(send)
    
    response.status(200).send(`Usuário(a) ${name} criado com sucesso 😀 !! `);
  } catch (error: any) {
    response.status(statusCode).send(error.message);
  }
};
