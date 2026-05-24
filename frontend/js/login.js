// Variaveis padrao para teste
let usuarioCadastro = "Teste";
let usuarioSenha = "123";
let temaEscuro = false;
// ---- ELEMENTOS DE TEMAS ----
const botaoTema = document.querySelector('#botao-tema-login');
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
const inputNovaSenhaConfirma = document.querySelector('#nova-senha-confirma');
//Evento de login se o usuario e senha forem iguais aos cadastrados, redireciona para a pagina principal, caso contrario exibe um alerta de erro
botaoLogin.addEventListener('click', function(){
    if(inputNome.value === usuarioCadastro && inputSenha.value === usuarioSenha){
        window.location.href = "/frontend/index.html";
    }else{
        alert("Erro: Usuário ou Senha invalidos");
    }
});
//Troca de formulario de login para cadastro
botaoSign.addEventListener('click', function(){
    //Esconde o formulario de login
    containerLogin.classList.add('escondido');
    //Mostra o formulario de cadastro
    containerSign.classList.remove('escondido');
});
//Cadastro de novo usuario
botaoCadastrar.addEventListener('click', function(){
    //Verifica se os campos não estão vazios
    if(inputNovoNome.value.trim() === "" || inputNovaSenha.value.trim() === ""){
        alert("Por favor preencha todos os campos antes de se cadastrar!");
        //Zera os campos para evitar que o usuario tente cadastrar com dados incompletos
        inputNovoNome.value = "";
        inputNovaSenha.value = "";
        inputNovaSenhaConfirma.value = "";
        return;
    // Verifica se a senha tem pelo menos 4 caracteres, para garantir uma senha minimamente segura
    }else if(inputNovaSenha.value.length < 4){
        alert("A senha deve ter pelo menos 4 caracteres!");
        inputNovoNome.value = "";
        inputNovaSenha.value = "";
        inputNovaSenhaConfirma.value = "";
        return;
    // Verifica se a senha e a confirmação de senha são iguais, para evitar erros de digitação
    }else if(inputNovaSenha.value !== inputNovaSenhaConfirma.value){
        alert("As senhas não coincidem! Por favor confirme sua senha corretamente.");
        inputNovoNome.value = "";
        inputNovaSenha.value = "";
        inputNovaSenhaConfirma.value = "";
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
//Voltar para o formulario de login
botaoVoltar.addEventListener('click', function(){
    containerLogin.classList.remove('escondido');
    containerSign.classList.add('escondido');
});
botaoTema.addEventListener('click', function(){
    if(temaEscuro){
        document.documentElement.style.setProperty('--cor-preta', '#0b0b0b');
        document.documentElement.style.setProperty('--cor-branca', '#ffffff');
        temaEscuro = false;
        document.querySelector('#botao-tema-login i').classList.remove('fa-sun');
        document.querySelector('#botao-tema-login i').classList.add('fa-moon');
    }else{
        document.documentElement.style.setProperty('--cor-preta', '#ffffff');
        document.documentElement.style.setProperty('--cor-branca', '#0b0b0b');
        temaEscuro = true;
        document.querySelector('#botao-tema-login i').classList.remove('fa-moon');
        document.querySelector('#botao-tema-login i').classList.add('fa-sun');
    }
});