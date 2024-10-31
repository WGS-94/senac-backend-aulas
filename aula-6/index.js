// Criando primaira API

// Cria um simples servidor HTTP que, a cada requisição, executa a função
const http = require('http');

// que é passada como parâmetro para http.createServer(), iniciamos a arrow function
http.createServer((req, res) => {

    // Extraindo a URL da requisição
    const url = req.url;
    const method = req.method;

    console.log(url, method);

    if(url.startsWith('/dados')){
        if(method === "GET"){
            const queryParams = new URLSearchParams(req.url.split("?")[1]);
            // Obter o valor do parâmetro 'nome'
            const nome = queryParams.get('nome')
            // Obter o valor do parâmetro 'idade'
            const idade = queryParams.get('idade')

            // Preparando resposta com os dados recebidos
            const respostaData = {
                nome:  nome,
                idade: idade,
                mensagem: `Olá, ${nome}! Você tem ${idade} anos de idade.`
            }

            // Definindo cabeçalho de resposta como json
            res.setHeader("Content-Type", "application/json");

            // Envia a resposta com os status (OK) e o corpo da resposta em JSON
            res.statusCode = 200
            res.end(JSON.stringify(respostaData))
        }
        else if(method === "POST"){
            const body = "";  // Armazena o corpo da requisição

            //  Escuta de dados que são enviado no corpo da requisição

            req.on('data', chunk => {
                body += chunk.toString();
            })

            // Quando a requisição é concluída, processa o corpo da requisição
            req.on('end', () => {
                const dados = JSON.parse(body);
                const respostaData = {
                    mensagem: `Olá, ${dados.nome}! Você tem ${dados.idade} anos
                    de idade.`
                }
            })
        }


    }


    // res.write("Hello World");

    // console.log("Requisição recebida!");
    // console.log("Parâmetros da requisição:");
  
    // // Mostra o método da requisição (GET, POST, PUT, DELETE, etc.)
    // console.log("Método:", req.method);
  
    // // Mostra a URL da requisição
    // console.log("URL:", req.url);
  
    // // // Mostra os cabeçalhos da requisição
    // console.log("Cabeçalhos:", req.headers);
  
    // res.end('Fim');
}).listen(9090, () => {
    console.log('Servidor rodando na porta 9090...');
});