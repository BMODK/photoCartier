// Variaveis padrao para teste
let usuarioCadastro = "Teste";
let usuarioSenha = "123";
// ---- ELEMENTOS LOGIN ----
const botaoLogin = document.querySelector('#botao-login');
const inputNome = document.querySelector('#nome-login');
const inputSenha = document.querySelector('#senha-login');
// ---- ELEMENTOS DE TRANSIÇÃO DE FORMULARIO ----
const botaoSign = document.querySelector('#botao-nova-conta');
const containerLogin = document.querySelector('#container-login');
const containerSign = document.querySelector('#container-cadastro');
const botaoVoltar = document.querySelector('#botao-voltar');
// ---- ELEMENTOS CADASTRO ----
const botaoCadastrar = document.querySelector('#botao-cadastro');
const inputNovoNome = document.querySelector('#novo-usuario');
const inputNovaSenha = document.querySelector('#nova-senha');

botaoLogin.addEventListener('click', function(){
    if(inputNome.value === usuarioCadastro && inputSenha.value === usuarioSenha){
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
    //Verifica se os campos não estão vazios
    if(inputNovoNome.value.trim() === "" || inputNovaSenha.value.trim() === ""){
        alert("Por favor preencha todos os campos antes de se cadastrar!");
        return;
    }
    usuarioCadastro = inputNovoNome.value;
    usuarioSenha = inputNovaSenha.value;
    alert("Usuário cadastrado com sucesso!");
    containerLogin.classList.remove('escondido');
    containerSign.classList.add('escondido');
    inputNome.value = "";
    inputSenha.value = "";
});
botaoVoltar.addEventListener('click', function(){
    containerLogin.classList.remove('escondido');
    containerSign.classList.add('escondido');
});