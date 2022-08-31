USE `hooks-4313149-adriane-goncalves`;
CREATE TABLE Funcionarios (
id INT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE
);

select * from Funcionarios;

insert into Funcionarios (id, nome, email)
values (001, 'Luana', 'lua@lbn.com' ),
       (002, 'Vinicius', 'vini@lbn.com' ),
       (003, 'Laura', 'lau@lbn.com' );
       
select id AS indentifier, email from Funcionarios;

select id, nome, email from Funcionarios where id= 3;
select * from Funcionarios where nome like '%a%';
select * from Funcionarios where nome not like '%r%' and email like '%u%' ;

insert into Funcionarios (id, nome, email)
values (004, 'Yuzo', 'yuzo@lbn.com' );

delete from Funcionarios where id = 4;