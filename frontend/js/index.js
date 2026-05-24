// Variávei para controle de tema
let temaEscuro = false;
// ---- ELEMENTOS DE TEMAS ----
const botaoTema = document.querySelector('#botao-tema');
//Evento para alternar entre tema claro e escuro, utilizando variaveis CSS para facilitar a manutenção do codigo
// Alterna o tema entre claro e escuro
botaoTema.addEventListener('click', function(){
    if(temaEscuro){
        document.documentElement.style.setProperty('--cor-preta', '#0b0b0b');
        document.documentElement.style.setProperty('--cor-branca', '#ffffff');
        temaEscuro = false;
        document.querySelector('#botao-tema i').classList.remove('fa-sun');
        document.querySelector('#botao-tema i').classList.add('fa-moon');
    }else{
        document.documentElement.style.setProperty('--cor-preta', '#ffffff');
        document.documentElement.style.setProperty('--cor-branca', '#0b0b0b');
        temaEscuro = true;
        document.querySelector('#botao-tema i').classList.remove('fa-moon');
        document.querySelector('#botao-tema i').classList.add('fa-sun');
    }
});