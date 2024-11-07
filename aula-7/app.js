// Importa o módulo 'express', que é um framework para construir aplicações web e APIs em Node.js.
const express = require('express');

// Cria uma instância do aplicativo Express, permitindo que você configure e manipule rotas e responda a solicitações.
const app = express();

//Importando o método 'uuidv4' da bibliotexa 'uuid', para gerar um identificador para a app
const {v4:uuidv4} = require('uuid')

//Configurar o servidor para aceitar requisições com dados JSON no corpo
app.use(express.json())
//Array onde armazenaremos temporariamenteos os projetos criados
const projects = []
//Middleware que registra as rotas e métodos das requisições no console

function logRoutes(request,response,next){
    // Extraindo o método e a URL da requisição
    const {method, url} = request
    // Formatando uma srting com o método e a URL
    const route = `[${method.toUpperCase()}] ${url}`
    //Exibindo a string no console
    console.log(route)
    //Executando o próximo Middleware ou rota
    return next()
}

//Habilitando o uso do middlewate de log de rotas em todas as requisições

// Define uma rota para o endpoint '/projects'.
// Quando uma solicitação GET é feita para '/projects', essa função é executada.
app.get('/projects', function(request, response) {
    return response.json(projects);
});

// Define uma rota para criar um novo projeto.
// Quando uma solicitação POST é feita para '/projects', essa função é executada.
app.post('/projects', logRoutes, function(request, response) {
    // Retorna uma resposta JSON com uma lista de projetos, incluindo o novo projeto.
    const {name, owner} = request.body

    // Verificando se o nome e responsável foram fornecidos ou informados, se não retorna 400
    if (!name || !owner) {
        return response.status(400).json({ error: 'name or owner are required' });
    }

    //Criando um novo projeto com ID único, com nome e o responsável
    const project = {
        id: uuidv4(),
        name,
        owner
    }
    //Adicionando o novo projeto ao array de projetos
    projects.push(project)
    //Retorna o projeto criado com status 201 (Criado)
    return response.status(201).json(project)
});

// Define uma rota para atualizar um projeto específico.
// O ':id' é um parâmetro de rota, que será substituído pelo ID do projeto na URL.
app.put('/projects/:id', function(request, response) {
    // Retorna uma resposta JSON com a lista de projetos atualizada.
    const {id} = request.params;
    const { name, owner } = request.body;

    // Verificando se o nome e responsável foram fornecidos ou informados, se não retorna 400
    if (!name || !owner) {
        return response.status(400).json({ error: 'name or owner are required' });
    }

    // Way 1
    const projectIndex = projects.findIndex(project => project.id === id);
    
    if (projectIndex === -1) {
        return response.status(404).json({ error: 'Project not found' });
    }
    
    projects[projectIndex] = {
        ...projects[projectIndex],
        name,
        owner
    }

    return response.json(projects[projectIndex]);
    
    // Way 2
    // const project = projects.find(p => p.id === id);

    // if (!project) {
    //     return response.status(404).json({ error: 'Project not found' });
    // }

    // project.name = name;
    // project.owner = owner;

    // return response.json(project);
});

// Define uma rota para deletar um projeto específico.
// O ':id' permite especificar qual projeto deletar pelo ID.
app.delete('/projects/:id', function(request, response) {

    const { id } = request.params;

    // Way 1
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex === -1) {
        return response.status(404).json({ error: 'Project not found' });
    }

    projects.splice(projectIndex, 1);

    // Way 2
    // const project = projects.find(p => p.id === id);
    // if (!project) {
    //     return response.status(404).json({ error: 'Project not found' });
    // }

    // projects.splice(projects.indexOf(project), 1);

    // Retorna uma resposta JSON com a lista de projetos após a exclusão de um deles.
    return response.json({ message: 'Project deleted successfully' });
});

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
// O servidor ficará "ouvindo" solicitações HTTP nessa porta.
app.listen(9091, () => {
    console.log('Server started on port 9091! 🏆');
});