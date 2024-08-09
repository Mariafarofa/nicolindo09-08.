const numeroSenha = doument.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent =tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = dimminiuTamanho;
botoes[1].onclick = aumentaTamanho;

function dimminiuTamanho(){
    if (tamanhoSenha > 1){
    // tamanhoSenha = tamanhoSenha-1;
    tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
    }
    function aumentaTamanho(){
        if (tamanhoSenha <20){
            //tamanhoSenha = tamanhoSenha+1;
            tamanhoSenha++;
        }
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }

    const campoSenha = document.querySelector('#campo-senha');

    const letraMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'
    geraSenha();

    function geraSenha(){
        let senha = '';
        for (let i = 0; i < tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*letraMaiusculas.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + letraMaiusculas[numeroAleatorio];
        }
        campoSenha.Value = senha;
    }