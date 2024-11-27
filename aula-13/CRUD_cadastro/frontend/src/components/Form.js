import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import React, { useEffect, useRef } from "react"; // Importa hooks do React: useEffect para efeitos colaterais e useRef para referência de elementos DOM
import styled from "styled-components"; // Importa a biblioteca styled-components para estilizar componentes com CSS-in-JS
import { toast } from "react-toastify"; // Importa a função 'toast' para exibir notificações

// Estilização do formulário com styled-components
const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

// Componente Form que recebe props para gerenciar usuários e edição
const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef(); // Usado para acessar diretamente os elementos DOM dentro do formulário

  // Hook useEffect para preencher os campos com os dados do usuário a ser editado, quando onEdit muda
  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]); // Dependência: reexecuta o efeito quando o estado 'onEdit' mudar

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const user = ref.current; // Acessa os dados preenchidos no formulário

    // Verifica se todos os campos estão preenchidos
    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!"); // Exibe um alerta caso algum campo esteja vazio
    }

    // Se estiver editando um usuário, realiza uma requisição PUT para atualizar os dados
    if (onEdit) {
      await axios
        .put("http://localhost:3000/" + onEdit.id, { // Envia os dados atualizados do usuário para a API
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data)) // Exibe sucesso se a requisição for bem-sucedida
        .catch(({ data }) => toast.error(data)); // Exibe erro caso a requisição falhe
    } else {
      // Se não estiver editando, realiza uma requisição POST para adicionar um novo usuário
      await axios
        .post("http://localhost:3000", { // Envia os dados para criar um novo usuário
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data)) // Exibe sucesso se a requisição for bem-sucedida
        .catch(({ data }) => toast.error(data)); // Exibe erro caso a requisição falhe
    }

    // Limpa os campos do formulário após o envio
    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    // Remove o estado de edição e atualiza a lista de usuários
    setOnEdit(null);
    getUsers();
  };

  return (
    // Componente de formulário com referência para acessar os campos
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      {/* Seção para o campo de Nome */}
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      {/* Seção para o campo de E-mail */}
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      {/* Seção para o campo de Telefone */}
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      {/* Seção para o campo de Data de Nascimento */}
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>

      {/* Botão de submissão do formulário */}
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form; // Exporta o componente para ser utilizado em outras partes do aplicativo
