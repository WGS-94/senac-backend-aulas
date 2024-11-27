// Importa a conexão com o banco de dados que foi configurada em outro arquivo (db.js)
import { db } from "../db.js";

// Função para buscar todos os usuários no banco de dados
export const getUsers = (_, res) => {
  // Define a consulta SQL para selecionar todos os usuários da tabela 'usuarios'
  const q = "SELECT * FROM usuarios";

  // Executa a consulta SQL
  db.query(q, (err, data) => {
    // Se houver erro na consulta, retorna o erro como resposta JSON
    if (err) return res.json(err);

    // Se a consulta for bem-sucedida, retorna os dados como resposta com status 200 (OK)
    return res.status(200).json(data);
  });
};

// Função para adicionar um novo usuário no banco de dados
export const addUser = (req, res) => {
  // Define a consulta SQL para inserir um novo usuário na tabela 'usuarios'
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  // Cria um array de valores que será inserido na tabela, baseado nos dados enviados no corpo da requisição
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Executa a consulta SQL para inserir o usuário
  db.query(q, [values], (err) => {
    // Se houver erro na consulta, retorna o erro como resposta JSON
    if (err) return res.json(err);

    // Se a inserção for bem-sucedida, retorna uma mensagem de sucesso com status 200 (OK)
    return res.status(200).json("Usuário criado com sucesso.");
  });
};

// Função para atualizar as informações de um usuário no banco de dados
export const updateUser = (req, res) => {
  // Define a consulta SQL para atualizar os dados de um usuário na tabela 'usuarios', baseado no 'id'
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  // Cria um array de valores que será usado para atualizar os dados do usuário, baseado nos dados da requisição
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Executa a consulta SQL para atualizar o usuário, passando os valores e o id do usuário
  db.query(q, [...values, req.params.id], (err) => {
    // Se houver erro na consulta, retorna o erro como resposta JSON
    if (err) return res.json(err);

    // Se a atualização for bem-sucedida, retorna uma mensagem de sucesso com status 200 (OK)
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

// Função para deletar um usuário do banco de dados
export const deleteUser = (req, res) => {
  // Define a consulta SQL para excluir um usuário da tabela 'usuarios' baseado no 'id'
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  // Executa a consulta SQL para excluir o usuário, passando o id do usuário
  db.query(q, [req.params.id], (err) => {
    // Se houver erro na consulta, retorna o erro como resposta JSON
    if (err) return res.json(err);

    // Se a exclusão for bem-sucedida, retorna uma mensagem de sucesso com status 200 (OK)
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
