import express from "express";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())

// Exercício 1

// Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.

// app.get("/", (req , res) => {          
//     res.send("Hello from Express")
// })


// Exercício 2
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:

type marvelCharacters = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,

}

// Exercício 3

// Crie um array de usuários para servir como base de dados da nossa API. 
// Insira nele quantos objetos quiser, fique à vontade para explorar sua criatividade 😉
// Não se esqueça de fazer a tipagem correta desse array.

const arryMarvel: marvelCharacters[] =[
    {
        id: 1,
        name: "Victor von Doom" ,
        phone: "(789) 87654-0987",
        email: "victor_doom@marvel.com",
        website: "victorvondoom.com" ,
    
    },

    {
        id: 2,
        name: "Capitão América" ,
        phone: "(616) 87654-0987",
        email: "capitãoamérica@marvel.com",
        website: "capitãoamérica.com" ,
    
    },
    {
        id: 3,
        name: "Victor von Doom" ,
        phone: "(789) 87654-0987",
        email: "victor_doom@marvel.com",
        website: "victorvondoom.com" ,
    
    },
    {
        id: 4,
        name: "Thor" ,
        phone: "(789) 87654-0987",
        email: "thor@marvel.com",
        website: "Thor.com" ,
    
    },
    {
        id: 5,
        name: "Viúva Negra" ,
        phone: "(789) 87654-0987",
        email: "viuva_negra@marvel.com",
        website: "viuvanegra.com" ,
    
    },
    {
        id: 6,
        name: "Visão" ,
        phone: "(789) 87654-0987",
        email: "visao@marvel.com",
        website: "visao.com" ,
    
    },
    {
        id: 7,
        name: "Mercúrio" ,
        phone: "(789) 87654-0987",
        email: "mercurio@marvel.com",
        website: "mercurio.com" ,
    
    },
    {
        id: 8,
        name: "Gamora" ,
        phone: "(789) 87654-0987",
        email: "gamora@marvel.com",
        website: "gamora.com" ,
    
    },
    {
        id: 9,
        name: "Groot" ,
        phone: "(789) 87654-0987",
        email: "groot@marvel.com",
        website: "groot.com" ,
    
    },
    {
        id: 10,
        name: "Gavião Arqueiro" ,
        phone: "(789) 87654-0987",
        email: "gaviao_arqueiro@marvel.com",
        website: "gaviaoarqueiro.com" ,
    
    }
    

]


// Exercício 4
// Construa um endpoint que retorne os usuários criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

app.get("/marvel", (req, res) => {   
    res.send({arryMarvel})       
})
// Exercício 5
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam posts. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:
type Post = {
    id: number,
    title: string,
    body: string,
    userld: number,
}
// Exercício 6
// Crie um array de posts para incrementar a base de dados da nossa API. 
// Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
// é melhor criar fora para mander a organização do codigo 
// Não se esqueça de fazer a tipagem correta desse array.

const arryPost: Post [] = [
    {
        id: 1,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 2,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 3,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 4,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 5,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 6,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 7,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 8,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 9,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },
    {
        id: 10,
        title: "Quarteto Fantástico",
        body: "Eu nego você, Morte! Victor von Doom não deve morrer!" ,
        userld: 1,
    },

]
// Exercício 7
// Construa um endpoint que retorne os posts criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

app.get("/post", (req, res) => {   
    res.send({arryPost})       
})

// Exercício 8

// Construa um endpoint que retorne os posts de um usuário em particular.
// Use o JSONPlaceholder como exemplo para a construção da rota.
app.get("/usuario/:id", (req, res) => {   
    const id =req.params.id
    const usuarioEspecifico =  arryPost.filter((post) => {
      return 
    })
})


app.listen(3003,() => {
    console.log("Servidor está oline na porta 3003")
})