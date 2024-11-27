import React from "react"; // Importa o React para criar componentes e manipular o estado
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import styled from "styled-components"; // Importa a biblioteca styled-components para estilizar componentes com CSS-in-JS
import { FaTrash, FaEdit } from "react-icons/fa"; // Importa os ícones de Lixeira (FaTrash) e Editar (FaEdit) para uso no componente
import { toast } from "react-toastify"; // Importa a função 'toast' para exibir notificações ao usuário

// Estilo para a tabela com o styled-components
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

// Estilo para o cabeçalho da tabela (thead)
export const Thead = styled.thead``;

// Estilo para o corpo da tabela (tbody)
export const Tbody = styled.tbody``;

// Estilo para as linhas da tabela (tr)
export const Tr = styled.tr``;

// Estilo para as células de cabeçalho da tabela (th)
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  // Ajuste para esconder colunas em telas pequenas
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// Estilo para as células da tabela (td)
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  // Ajuste para esconder colunas em telas pequenas
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  // Função chamada quando o usuário clica para editar um item
  const handleEdit = (item) => {
    setOnEdit(item); // Define o estado 'onEdit' com os dados do item para editar
  };

  // Função chamada quando o usuário clica para excluir um item
  const handleDelete = async (id) => {
    // Faz uma requisição DELETE para remover o usuário no backend
    await axios
      .delete("http://localhost:3000/" + id)
      .then(({ data }) => { // then é um promisse
        // Filtra o array de usuários para remover o usuário deletado
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray); // Atualiza o estado com a nova lista de usuários
        toast.success(data); // Exibe uma notificação de sucesso
      })
      .catch(({ data }) => toast.error(data)); // Exibe uma notificação de erro caso a requisição falhe

    setOnEdit(null); // Limpa o estado de edição
  };

  return (
    // Tabela exibindo os dados dos usuários
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th> {/* A coluna 'Fone' só será visível em telas grandes */}
          <Th></Th> {/* Coluna vazia para o botão de editar */}
          <Th></Th> {/* Coluna vazia para o botão de excluir */}
        </Tr>
      </Thead>
      <Tbody>
        {/* Mapeia os usuários e renderiza uma linha para cada um */}
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td> {/* Nome do usuário */}
            <Td width="30%">{item.email}</Td> {/* E-mail do usuário */}
            <Td width="20%" onlyWeb>{item.fone}</Td> {/* Telefone do usuário, visível apenas em telas grandes */}
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} /> {/* Ícone de editar */}
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} /> {/* Ícone de excluir */}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid; // Exporta o componente Grid para ser utilizado em outras partes do aplicativo
