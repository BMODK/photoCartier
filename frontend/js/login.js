
const botaoLogin = document.querySelector('#botaologin');
const inputNome = document.querySelector('input[type="text"]');
const botaoSign = document.querySelector('#botaosign');
const inputSenha = document.querySelector('input[type="password"]');
const containerLogin = document.querySelector('#container-login');
const containerSign = document.querySelector('#container-cadastro');
const botaoCadastrar = document.querySelector('#botao-cadastro');


botaoLogin.addEventListener('click', function(){
    if(inputNome.value === "Teste" && inputSenha.value === "123"){
        window.location.href = "/frontend/index.html";
    }else{
        alert("Erro: Usuário ou Senha invalidos");
    }
});
botaoSign.addEventListener('click', function(){
    //Esconde o formulario de login
    containerLogin.classList.add('escondido');
    //Mostra o formulario de cadastro
    containerSign.classList.remove('escondido');
});
botaoCadastrar.addEventListener('click', function(){
    containerLogin.classList.remove('escondido');
    containerSign.classList.add('escondido');
});