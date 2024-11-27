import React from 'react'; // Importa o React, necessário para criar componentes React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar o componente na árvore DOM
import App from './App'; // Importa o componente principal 'App' da aplicação

// Cria o ponto de entrada da aplicação, onde o componente será renderizado na página
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria um root no elemento com o id 'root' da página HTML

// Renderiza a aplicação dentro do root, utilizando o React.StrictMode para ativar verificações e alertas adicionais durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App, que é o principal da aplicação */}
  </React.StrictMode>
);
