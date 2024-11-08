// Importa o módulo 'express', que é um framework para construir aplicações web e APIs em Node.js.
const express = require('express');
const path = require('path');

// Cria uma instância do aplicativo Express, permitindo que você configure e manipule rotas e responda a solicitações.
const app = express();

const PORT = 5000;

//Configurar o servidor para aceitar requisições com dados JSON no corpo
app.use(express.json())

// Falar ao express para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Renderizar templates html
app.get('/',function(request, response){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor na porta 5000 e exibe uma mensagem no console.
// O servidor ficará "ouvindo" solicitações HTTP nessa porta.
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}! 🏆`);
});