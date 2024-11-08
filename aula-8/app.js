// Importar o express
const express = require('express');
// Importar uuid - Identificador Único Universal para gerar ids únicos  
const { v4: uuidv4 } = require('uuid');

//  Criar uma instância do express 
const app = express();

//  Definir o tipo de conteúdo que será retornado pela aplicação
app.use(express.json());

const livros = [];

// ROUTAS
// Definindo uma rora para o endpoint /projetos
app.get('/projetos', (req, res) => {
    res.status(200).json([
        { id: 1, nome: 'Projeto 1', descricao: 'Descrição do projeto 1' },
        { id: 2, nome: 'Projeto 2', descricao: 'Descrição do projeto 2' }
    ]);
});

// Definindo uma rota para criar um novo projeto
app.post('/criar-projetos', (req, res)=> {

    // const { nome, descricao } = req.body;

    // console.log(req.body)

    res.status(200).json([
        { id: 1, nome: 'Projeto 1', descricao: 'Descrição do projeto 1' },
        { id: 2, nome: 'Projeto 2', descricao: 'Descrição do projeto 2' },
        { id: 3, nome: 'Projeto 3', descricao: 'Descrição   do projeto 3' }
    ]);
});

// Definido rota para atualizar um projeto específico
// O id é um parâmetro de rota
app.put('/atualizar-projeto/:id', (req, res) => {
    res.status(200).json([
        { id: 2, nome: 'Projeto 2', descricao: 'Descrição  do projeto 2' },
        { id: 3, nome: 'Projeto 3', descricao: 'Descrição   do projeto 3' },
        { id: 4,  nome: 'Projeto 4', descricao: 'Descrição  do projeto 4' }
    ])
});

// Definindo rota para deletar um projeto específico
// O id é um parâmetro de rota
app.delete('/deletar-projeto/:id', (req, res) => {
    res.status(200).json([
        { id: 1, nome: 'Projeto 1', descricao: 'Descrição  do projeto 1' },
        { id: 3, nome: 'Projeto 3', descricao: 'Descrição   do projeto 3' }
    ])
});

// Iniciar o servidor
app.listen(9091, () => {
    console.log('Servidor rodando na porta 9091...');
});