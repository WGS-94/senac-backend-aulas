// Importa os módulos necessários para o funcionamento do servidor
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Cria uma instância do servidor Express
const app = express();

// Middleware para analisar o corpo das requisições em formato JSON
app.use(bodyParser.json());
// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: '127.0.0.1', // Endereço do servidor do banco de dados
  user: 'root', // Nome do usuário do banco de dados
  password: '1234', // Senha do usuário do banco de dados (alterar conforme a configuração)
  database: 'crud_example', // Nome do banco de dados a ser utilizado
});

// Conecta ao banco de dados e exibe uma mensagem de sucesso ou erro
db.connect((err) => {
    if (err) throw err; // Se ocorrer um erro, lança uma exceção
    console.log('Conectado ao banco de dados!'); // Mensagem de sucesso
});

// Obtém a porta do ambiente ou usa 3000 como padrão
const PORT = 3000;

// Inicia o servidor na porta especificada e exibe uma mensagem de que está em execução
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`); // Mensagem de confirmação
});
