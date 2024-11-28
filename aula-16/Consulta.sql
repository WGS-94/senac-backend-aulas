CREATE DATABASE gerenciamento_notebooks_senac;

USE  gerenciamento_notebooks_senac;

CREATE TABLE donos (
    id_dono INT AUTO_INCREMENT PRIMARY KEY, -- ID único para cada dono (chave primária)
    nome VARCHAR(100) NOT NULL,            -- Nome do dono (máximo de 100 caracteres, obrigatório)
    email VARCHAR(100) UNIQUE NOT NULL,    -- E-mail do dono (único e obrigatório)
    telefone VARCHAR(15),                   -- Telefone do dono (opcional, com até 15 caracteres)
    id_hash VARCHAR(100)
);

CREATE TABLE notebooks (
    id_notebook INT AUTO_INCREMENT PRIMARY KEY, -- ID único para cada celular (chave primária)
    modelo VARCHAR(100) NOT NULL,             -- Modelo do celular (máximo de 100 caracteres, obrigatório)
    marca VARCHAR(50) NOT NULL,               -- Marca do celular (máximo de 50 caracteres, obrigatório)
    numero_serie VARCHAR(50) UNIQUE NOT NULL, -- Número de série único do celular (obrigatório)
    id_hash VARCHAR(100),
    id_dono INT,                              -- Chave estrangeira que vincula o celular a um dono
    FOREIGN KEY (id_dono) REFERENCES donos(id_dono) -- Configuração da chave estrangeira:
                                                    -- vincula 'id_dono' da tabela 'celulares'
                                                    -- com 'id_dono' da tabela 'donos'
    ON DELETE CASCADE                         -- Se um dono for excluído, seus celulares também serão excluídos
);