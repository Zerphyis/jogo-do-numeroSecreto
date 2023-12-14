let numerosEscolhidosSortidos=[];
let numeroLimite=10;
let NumeroSecreto=GerarNumeroAleatorio();
let tentativa= 1;

function exibirTextoNaTela(tags,texto){

    let campo=document.querySelector(tags);

    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function ExibirMensagem(){

exibirTextoNaTela('h1','Jogo do Número secreto.');

exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
ExibirMensagem();
function verificarChute(){
  let chute=document.querySelector("input").value;
    if(chute == NumeroSecreto){

        exibirTextoNaTela('h1','Párabens você ganhou o jogo');

        let palavraTentativa= tentativa > 1 ? 'tentativas': 'tentativa';

        let mensagem=`Você descobriu o número secreto,com o  número de ${tentativa}  ${palavraTentativa}.`

        exibirTextoNaTela('p',mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
            if(chute > NumeroSecreto){
                exibirTextoNaTela('p','O Número secreto e menor');
            }
            else{
                exibirTextoNaTela('p','O Número secreto e maior');
            }
        tentativa++;
        Limparcampo();

    }


}

function GerarNumeroAleatorio() {
    let numeroEscolhido=parseInt(Math.random()* numeroLimite + 1);

    let listaElementosSortidos=numerosEscolhidosSortidos.length;

    if(listaElementosSortidos == numeroLimite){
        numerosEscolhidosSortidos=[];
    }
    if(numerosEscolhidosSortidos.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
    }else{
        numerosEscolhidosSortidos.push(numeroEscolhido);
        console.log(numerosEscolhidosSortidos);
        return numeroEscolhido;
    }
}

function Limparcampo(){
    chute=document.querySelector('input');
    chute.value="";
}

function ReinicarJogo(){
    NumeroSecreto=GerarNumeroAleatorio();
    Limparcampo();
    tentativa= 1;
    ExibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}