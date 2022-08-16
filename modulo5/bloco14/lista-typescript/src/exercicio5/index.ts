type usuario = {
    name: string;
    email: string;
    role: ROLE;
  };
      
enum ROLE {
    ADMIN = "Admin",
    USER = "user"
}

const listaUsuario : usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER },
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN},     
] 

const retonarEmailAdmin = (listEmail: usuario[]): string[] =>{
    // recebe um arry como parametro: retonar uma lista string[]
    const emailDeAdmin: string[] = listEmail
    .filter((usuario) => usuario.role === ROLE.ADMIN) 
    // ( filtra quem é ADMIN)
    .map((usuario) => usuario.email);
    //  (Mapeia o email)
    return emailDeAdmin
}

console.log(retonarEmailAdmin(listaUsuario))