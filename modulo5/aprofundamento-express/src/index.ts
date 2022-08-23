import express, { response } from "express";
import cors from 'cors'
import { type } from "os";
import { request } from "https";

const app = express();

app.use(express.json());
app.use(cors())

// Exercício 1
// Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (request, response) => {          
    response.send("Pong! 🏓")
})

app.listen(3003,() => {
    console.log("Servidor está oline na porta 3003")
})

// Exercício 2
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”). Crie uma variável de tipo para representar cada afazer.
type ToDos = {
    userId : number,
    id : number,
    title: string,
    completed: boolean | string
}
// Exercício 3
// Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior. 


const listTarefas: ToDos[] = [
    {
        userId : 1,
        id : 4,
        title: "Fazer exercicio labenu",
        completed: true
    },
    {
        userId : 2,
        id : 8,
        title: "Fazer exercicio de logica",
        completed: false
    },
    {
        userId : 1,
        id : 12,
        title: "Organizar a casa",
        completed: true
    },
]
// Exercício 4

// Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.
app.get('/afazeres-em-andamendo', (request, response) =>{
    const listaDetarefasEmAndamento = listTarefas.filter((tarefaEmAndamento) => {
        return tarefaEmAndamento.completed === false
    })
    response.status(200).send(listaDetarefasEmAndamento)
}) 
// Exercício 5
// Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.
app.post('/cria-tarefas', (request, response) =>{
   try{

    const criarTarefas = {
        userId : Date.now(),
        id : (request.body.id),
        title:(request.body.title) ,
        completed:(request.body.completed) 
    }
    listTarefas.push(criarTarefas)
    response.status(200).send({criarTarefas})
   }
   catch(error){
    response.status(400).end('Algo deu errado :(')
   }
}) 
// Exercício 6
// Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.
// Exercício 7
// Construa um endpoint que deleta um determinado afazer de acordo com sua id.
// Exercício 8
// Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.
// Exercício 9
// Crie a documentação Postman dos endpoints desenvolvidos