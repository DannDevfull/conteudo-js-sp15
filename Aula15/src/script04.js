// Animação no DOM

// O JavaScript altera repetidamente a posição de um elemento, fazendo com que ele pareça estar em movimento
const frame = document.querySelector("#frame");

let id = null;

function animar(){
    let posicao = 0;

    clearInterval(id);
    // Este método interrompe o temporizador gerado pelo setInterval()
    // Como o temporizador está armazenado no id, usamos ele para indicar qual temporizador deve ser encerrado


    id = setInterval(atualizarFrame, 5);
    // setInterval() é um método em Js que executa a função repetidamente, em intervalos de tempos
    // Aqui, ele irá executar a função "atualizarFrame" em 5 milissegundos
    // O Id controlará aquele temporizador, representado pelo setInterval()


    // Está é a função que será executada repetidamente
    function atualizarFrame(){
        if(posicao == 300){
            clearInterval(id);
        }else{
            posicao++;
            frame.style.top = posicao + "px";
            frame.style.left = posicao + "px";
        }
    }






}