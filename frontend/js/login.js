
const botaoLogin = document.querySelector('#botaologin');
const inputNome = document.querySelector('input[type="text"]');
const botaoSign = document.querySelector('#botaosign');
const inputSenha = document.querySelector('input[type="password"]');

botaoLogin.addEventListener('click', function(){
    if(inputNome.value === "Teste" && inputSenha.value === "123"){
        window.location.href = "/frontend/index.html";
    }else{
        alert("Erro: Usuário ou Senha invalidos");
    }
});