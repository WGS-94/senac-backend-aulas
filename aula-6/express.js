// Importar o express
const express =  require('express');

// Criar a aplicação com express 
const app = express();

// Routas

// Quando uma solicitação GET é feita na raiz '/' da aplicação, a função dentro do app.get será executada
app.get('/teste', (req, res) => {
    // Resposta de boas vindas para o cliente
    res.status(200).json({ message: 'Hello, teste ok, tudo funcionando!' });
});

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