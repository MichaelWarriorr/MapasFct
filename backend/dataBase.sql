-- Criação do banco de dados, se não existir
DROP DATABASE IF EXISTS mapasfct;
CREATE DATABASE mapasfct;



-- Seleciona o banco de dados para uso
USE mapasfct;

-- Criação da tabela de funcionários
CREATE TABLE funcionarios (
    id INT NOT NULL  PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela de salas
CREATE TABLE salas (
    id INT NOT NULL PRIMARY KEY,
    id_funcionario INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    tipo_sala VARCHAR(255) NOT NULL,    
    capacidade TINYINT NOT NULL, 
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id)
);

INSERT INTO funcionarios VALUES ('1', 'Joao Francisco'), ('2', 'Ricardo Pinheiro');

INSERT INTO salas VALUES ('1', '1', '0.D025', 'OLA', 'oVAL', '20');
