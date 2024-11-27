// Importa o módulo express, que é um framework para construção de servidores web em Node.js
import express from "express"

// Importa as rotas de usuários que estão definidas em outro arquivo (./routes/users.js)
import userRoutes from "./routes/users.js"

// Importa o módulo cors, que permite que a aplicação aceite requisições de diferentes origens
import cors from "cors"

// Cria uma instância do aplicativo Express
const app = express()

// Configura o aplicativo para analisar o corpo das requisições como JSON
app.use(express.json())

// Configura o middleware CORS para permitir que requisições de diferentes origens possam ser feitas à API
app.use(cors())

// Configura as rotas do aplicativo, associando a rota principal ("/") com as rotas de usuários definidas em 'userRoutes'
app.use("/", userRoutes)

// Faz o servidor escutar na porta 8800, esperando por requisições
app.listen(3000)
