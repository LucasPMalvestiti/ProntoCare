// Importa a biblioteca Axios
const axios = require('axios');

// Define a URL que você deseja acessar
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Faz uma requisição GET para a URL
axios.get(url)
  .then(response => {
    // Sucesso: Imprime os dados da resposta
    console.log(response.data.id);
  })
  .catch(error => {
    // Erro: Imprime uma mensagem de erro
    console.error('Houve um erro na requisição:', error);
  });