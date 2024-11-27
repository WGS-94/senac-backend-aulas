import GlobalStyle from "./styles/global"; // Importa os estilos globais definidos em 'global.js'
import styled from "styled-components"; // Importa o styled-components para estilizar componentes
import Form from "./components/Form.js"; // Importa o componente de formulário
import Grid from "./components/Grid"; // Importa o componente de exibição dos dados em tabela
import { useEffect, useState } from "react"; // Importa hooks do React: useState e useEffect
import { toast, ToastContainer } from "react-toastify"; // Importa a biblioteca de notificações toast
import "react-toastify/dist/ReactToastify.css"; // Importa o estilo do toast
import axios from "axios"; // Importa a biblioteca Axios para requisições HTTP

// Define o container principal, com largura máxima, centralização e espaço entre os itens
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Define o estilo do título
const Title = styled.h2``;

// Função principal da aplicação
function App() {
  const [users, setUsers] = useState([]); // Estado para armazenar a lista de usuários
  const [onEdit, setOnEdit] = useState(null); // Estado para armazenar o usuário a ser editado

  // Função assíncrona para buscar os usuários da API
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000"); // Realiza uma requisição GET para obter os usuários
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1))); // Ordena os usuários por nome em ordem crescente
    } catch (error) {
      toast.error(error); // Exibe um erro caso a requisição falhe
    }
  };

  // useEffect para buscar os usuários ao carregar o componente
  useEffect(() => {
    getUsers(); // Chama a função getUsers quando o componente for montado
  }, [setUsers]); // O hook é executado sempre que o estado 'setUsers' for atualizado

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title> {/* Título da página */}
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} /> {/* Componente de formulário */}
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} /> {/* Componente que exibe os usuários em tabela */}
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> {/* Container para exibir notificações */}
      <GlobalStyle /> {/* Aplica os estilos globais na aplicação */}
    </>
  );
}

export default App; // Exporta o componente principal 'App' para ser utilizado
