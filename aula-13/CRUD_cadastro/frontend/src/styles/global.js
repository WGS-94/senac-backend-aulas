import { createGlobalStyle } from "styled-components"; // Importa a função 'createGlobalStyle' da biblioteca 'styled-components' para criar estilos globais

// Cria os estilos globais da aplicação
const Global = createGlobalStyle`
  * {
    margin: 0; // Remove as margens padrão de todos os elementos
    padding: 0; // Remove o preenchimento (padding) padrão de todos os elementos
    font-family: 'poppins', sans-serif; // Define a fonte 'Poppins' para todos os elementos, com uma fonte sans-serif de fallback
  }
  
  body {
    width: 100vw; // Define a largura do body para ocupar toda a largura da janela de visualização
    height: 100vh; // Define a altura do body para ocupar toda a altura da janela de visualização
    display: flex; // Define o body como um container flexível
    justify-content: center; // Alinha o conteúdo no centro horizontalmente
    background-color: #f2f2f2; // Define a cor de fundo do body como um cinza claro
  }
`;

export default Global; // Exporta o componente Global para ser usado em outras partes da aplicação
