import connection from "./connection";
const users = require( "./users.json");

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>  connection
    .raw( `
    CREATE TABLE TodoListUser (
        id VARCHAR(255) PRIMARY KEY, 
        name VARCHAR(255) NULL, 
        nickname VARCHAR(255) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE TodoListTask (
        id VARCHAR(255) PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATETIME NOT NULL,
        creator_user_id varchar(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
    );
    CREATE TABLE TodoListResponsibleUserTaskRelation (
        task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
        FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
    );
`
    )
    .then(() => { console.log("Tabelas criadas");})
    .catch(printError);


const insertUsers = () =>  connection("TodoListUser")
    .insert(users)
    .then(() => {console.log("Usuários criados");})
    .catch(printError);



const closeConnection = () => {
  connection.destroy();
};

createTables().then(insertUsers).finally(closeConnection);
