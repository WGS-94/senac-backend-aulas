// Criando primaira API

// Cria um simples servidor HTTP que, a cada requisição, executa a função
const http = require('http');

// que é passada como parâmetro para http.createServer(), iniciamos a arrow function
http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World");

    console.log("Requisição recebida!");
    console.log("Parâmetros da requisição:");
  
    // Mostra o método da requisição (GET, POST, PUT, DELETE, etc.)
    console.log("Método:", req.method);
  
    // Mostra a URL da requisição
    console.log("URL:", req.url);
  
    // // Mostra os cabeçalhos da requisição
    console.log("Cabeçalhos:", req.headers);
  
    res.end('Fim');
}).listen(9090, () => {
    console.log('Servidor rodando na porta 9090...');
});