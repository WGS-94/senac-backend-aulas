const https = require("https");

function buscarUsuario() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
  
    return new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          let dados = "";
  
          res.on("data", (pedaco) => {
            dados += pedaco;
          });
  
          res.on("end", () => {
            try {
              const resultado = JSON.parse(dados);
              const dadosUsuario = resultado;
              resolve(dadosUsuario);
            } catch (erro) {
              reject("Erro ao processar os dados: " + erro);
            }
          });
        })
        .on("error", (erro) => {
          reject("Erro ao fazer a requisição: " + erro);
        });
    });
  }

  function exibirDadosUsuario(user) {
    console.log(`
    Informações do Usuário:
    -----------------------
    ID: ${user.id}
    Nome: ${user.name}
    Nome de Usuário: ${user.username}
    Email: ${user.email}
    Endereço:
      Rua: ${user.address.street}
      Suíte: ${user.address.suite}
      Cidade: ${user.address.city}
      CEP: ${user.address.zipcode}
    Telefone: ${user.phone}
    Website: ${user.website}
    Empresa:
      Nome: ${user.company.name}
      Slogan: ${user.company.catchPhrase}
      BS: ${user.company.bs}
    `);
  }

  buscarUsuario()
  .then((dadosUsuario) => {
    exibirDadosUsuario(dadosUsuario);
  })
  .catch((erro) => {
    console.error(erro);
  });