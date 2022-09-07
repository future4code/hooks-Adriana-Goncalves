// import connection from "./connection";

// const criarTabelaTodoListUser = async () => {
//   try {
//     await connection.raw(`
//         CREATE TABLE TodoListUser (
//         id VARCHAR(255) PRIMARY KEY, 
//         name VARCHAR(255) NULL, 
//         nickname VARCHAR(255) UNIQUE NOT NULL, 
//         email VARCHAR(255) UNIQUE NOT NULL
//         );
//         `);

//     console.log("Tabela To do List criada com sucesso.");
//   } catch (error: any) {
//     console.log("Erro ao criar tabela To do List.");
//     console.log(error.sqlMessage);
//   }
// };

// const criarTabelaTodoListTask = async () => {
//   try {
//     await connection.raw(`
//         CREATE TABLE TodoListTask (
// 		id VARCHAR(255) PRIMARY KEY, 
//         title VARCHAR(255) NOT NULL, 
//         description TEXT NOT NULL, 
//         status VARCHAR(255) NOT NULL DEFAULT "to_do",
//         limit_date DATE NOT NULL,
//         creator_user_id varchar(255) NOT NULL,
//         FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
//         );
//           `);

//     console.log("Tabela To do List Task criada com sucesso.");
//   } catch (error: any) {
//     console.log("Erro ao criar tabela To do List Task.");
//     console.log(error.sqlMessage);
//   }
// };

// const criarTavelaTodoListResponsibleUserTaskRelation = async () => {
//   try {
//     await connection.raw(`
//         CREATE TABLE TodoListResponsibleUserTaskRelation (
//         task_id VARCHAR(255),
//         responsible_user_id VARCHAR(255),
//         FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
//         FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
//         );
//         `);

//     console.log(
//       "Tabela To do List Responsible User Task Relation criada com sucesso."
//     );
//   } catch (error: any) {
//     console.log(
//       "Erro ao criar tabela To do List Responsible User Task Relation."
//     );
//     console.log(error.sqlMessage);
//   }
// };

// async function popularTabelaTodoListUser() {
//   try {
//     await connection.raw(`
//             INSERT INTO Produtos (id, nome, nickname, email)
//             VALUES 
//             (1, "Adriane", "Adri", "adri@dev.com");
//         `);

//     console.log("Tabela Produtos populada com sucesso.");
//   } catch (error: any) {
//     console.log("Erro ao popular tabela Produtos.");
//     console.log(error.sqlMessage);
//   }
// }

// criarTabelaTodoListUser()
//   .then(() => popularTabelaTodoListUser())
//   .finally(() => process.exit());
