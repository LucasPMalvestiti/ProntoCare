// Define a URL que você deseja acessar
const url = "http://localhost:8080/login"

function EnviarLogin()
  {
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      
      
      const data = JSON.stringify({
        "email": email,
        "password": password
      });

      axios.post(url, data)
      .then(response => {
        console.log('Sucesso', response.data);
        if(response.data === 200){
          window.location.href = 'main_page.html';
        }else{
          console.log('Erro no login', response.data);
        }
      })
      .catch(error =>{
        console.log(error);
      });
    }
