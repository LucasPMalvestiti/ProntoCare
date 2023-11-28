// Define a URL que você deseja acessar
const url = "http://localhost:8080/signin"

function CriarNovoUsuario()
{
    const name = document.getElementById('name');
    const crm = document.getElementById('crm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const data = JSON.stringify({
        "name": name,
        "crm": crm,
        "email": email,
        "password": password
    });

    axios.post(url, data)
    .then(response => {
        if(response.data === 200){
            alert('Usuario cadastrado!')
            window.location.href = 'index.html';
        }else{
            alert(response.data);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}