import express from "express"
import dotenv from "dotenv"
import { AddressInfo } from "net";


dotenv.config();
export const app = express()

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`);
     }else {
     console.error(`Failure upon starting server.`);
     }
});

// type authenticationData = {
//    id: string
// }

// type user = {
//    id: string,
//    name: string,
//    email: string,
//    password: string
// }

// enum POST_TYPES {
//    NORMAL = "normal",
//    EVENT = "event"
// }

// type post = {
//    id: string,
//    photo: string,
//    description: string,
//    type: POST_TYPES,
//    createdAt: Date,
//    authorId: string
// }

// /**************************** SERVICES ******************************/

// const generateId = (): string => v4()

// /**************************** ENDPOINTS ******************************/

// app.post('/users', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"
//       const { name, email, password } = req.body

//       if (!name || !email || !password) {
//          res.statusCode = 406
//          message = '"name", "email" and "password" must be provided'
//          throw new Error(message)
//       }

//       const id: string = generateId()

//       await connection('labook_users')
//          .insert({
//             id,
//             name,
//             email,
//             password
//          })

//       res.status(201).send({ message })

//    } catch (error:any) {
//       res.statusCode = 400
//       let message = error.sqlMessage || error.message
//       res.send({ message })
//    }
// })

// app.post('/post', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"

//       const { photo, description, type, authorId } = req.body

//       const postId: string = generateId()

//       await connection("labook_posts")
//          .insert({
//             id:postId,
//             photo,
//             description,
//             type,
//             author_id: authorId
//          })

//       res.status(201).send({ message })

//    } catch (error:any) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400
//       res.send({ message })
//    }
// })

// app.get('/posts/:id', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"

//       const { id } = req.params

//       const queryResult: any = await connection("labook_posts")
//          .select("*")
//          .where({ id })

//       if (!queryResult[0]) {
//          res.statusCode = 404
//          message = "Post not found"
//          throw new Error(message)
//       }

//       const post: post = {
//          id: queryResult[0].id,
//          photo: queryResult[0].photo,
//          description: queryResult[0].description,
//          type: queryResult[0].type,
//          createdAt: queryResult[0].created_at,
//          authorId: queryResult[0].author_id,
//       }

//       res.status(200).send({ message, post })

//    } catch (error:any) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400
//       res.send({ message })
//    }
// })

// /**************************** SERVER INIT ******************************/
