USE `hooks-4313149-adriane-goncalves`;
-- Exercicio 01

CREATE TABLE Empresa (
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
title VARCHAR(255) NOT NULL,
data DATE NOT NULL
);

SELECT * FROM Empresa;

-- Exercicio 02
INSERT INTO Empresa ( id, name, title, data)
VALUES (001, 'LabeSky', 'LSy', '2023/10/05'),
	   (003, 'Labefy', 'LSy', '2024/01/06'),
       (004, 'AstroZoom', 'AZm', '2022/12/20');
       
-- Exercicio 03
-- Exercicio A
ALTER TABLE Empresa DROP COLUMN title;
DESCRIBE Empresa;

-- Exercicio B 
ALTER TABLE Empresa 
CHANGE data dueDate DATE NOT NULL;

-- Exercicio C
SELECT * FROM Funcionarios;
DESCRIBE Funcionarios;

ALTER TABLE Funcionarios 
MODIFY email VARCHAR(255);

-- Exercicio 4
-- Exercicio A    
ALTER TABLE Empresa ADD description TEXT;

-- Exercicio B   
UPDATE Empresa
SET description = 'Projeto de sistema em nuvem da Labenu.'
WHERE id = 1;

UPDATE Empresa
SET description = 'Projeto de sistema de gerenciamento de músicas da Labenu.'
WHERE id = 3;

UPDATE Empresa
SET description = 'Projeto de rede de comunicação da Labenu.'
WHERE id = 4;

-- Exercicio 5
-- Exercicio A    
SELECT dueDate FROM Empresa ORDER BY dueDate DESC;

-- Exercicio B 
SELECT name, dueDate FROM Empresa ORDER BY dueDate ASC LIMIT 2;



