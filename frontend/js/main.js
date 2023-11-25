import axios from 'axios';

// Define a URL que você deseja acessar
const url = 'http://localhost:8080/login';

const email = document.getElementById('email');
const password = document.getElementById('password');

const data = {
  email: email,
  password: password
};

// Faz uma requisição GET para a URL
axios.post(url, data)
  .then(response => {
        console.log('Sucesso', response.data);
        if(response.data === 200){
          window.location.href = 'main_page.html';
        }else{
          console.error('Erro no login', response.data);
        }
      })
      .catch(error =>{
        console.error('Erro:', error);
      });