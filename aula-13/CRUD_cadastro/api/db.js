import mysql from "mysql";  // Importa a biblioteca mysql para utilizar as funcionalidades do MySQL no Node.js

// Cria a conexão com o banco de dados MySQL
export const db = mysql.createConnection({
    host: "localhost",     // Endereço do servidor onde o MySQL está hospedado (no caso, está rodando localmente)
    user: "root",          // Nome de usuário para conectar ao banco de dados (usuário padrão 'root')
    password: "Bruna161192", // Senha do usuário 'root' para acessar o banco de dados
    database: "crud_cadastro2"       // Nome do banco de dados que será utilizado (neste caso, o banco 'crud')
});
