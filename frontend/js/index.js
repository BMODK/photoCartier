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

//logica para o texto do hero


const elementoTexto = document.getElementById('texto-maquina');


const textoCompleto = "PHOTOCARTIER";
let indiceAtual = 0;
let estaApagando = false;

function motorMaquinaEscrever() {
    // Pega o pedaço do texto baseado no índice atual
    if (!estaApagando) {
        // Se está digitando, pega uma letra a mais
        elementoTexto.textContent = textoCompleto.substring(0, indiceAtual + 1);
        indiceAtual++;
    } else {
        // Se está apagando, remove uma letra
        elementoTexto.textContent = textoCompleto.substring(0, indiceAtual - 1);
        indiceAtual--;
    }

    // Define a velocidade padrão da digitação (em milissegundos)
    let velocidade = estaApagando ? 50 : 150; // Apaga mais rápido do que digita

    // LOGICA DOS ESTADOS (Terminou de digitar? Terminou de apagar?)
    if (!estaApagando && indiceAtual === textoCompleto.length) {
        // Terminou a frase! Dá uma pausa de 2 segundos antes de começar a apagar
        velocidade = 2000; 
        estaApagando = true;
    } else if (estaApagando && indiceAtual === 0) {
        // Apagou tudo! Espera meio segundo e volta a digitar
        velocidade = 500;
        estaApagando = false;
    }

    // Executa a própria função novamente após o tempo determinado (o loop)
    setTimeout(motorMaquinaEscrever, velocidade);
}

// 3. START: Ativa o motor assim que a página carrega
document.addEventListener("DOMContentLoaded", motorMaquinaEscrever);