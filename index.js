import entradaDados from 'readline-sync';
import listaDeFrutas from './dados.js';
import {atualizarPalavraOculta, validarLetraDigitada} from './funcoes.js';

let palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];
let numeroDeLetras = palavraEscolhida.length;
let primeiraLetra = palavraEscolhida[0];
let underline = "_".repeat(palavraEscolhida.length - 1);
let palavraOculta = primeiraLetra + underline;
let posicao = 0;
let chances = 4;

while ((palavraOculta != palavraEscolhida) && (chances > 0))
{
    console.log('\n------------JOGO DA FORCA------------');
    console.log('\nNome da fruta com ' + numeroDeLetras + ' letras:');
    console.log('Fruta: ' + palavraOculta);

   
    let letraDigitada = entradaDados.question('Digite uma letra: ').toLowerCase();
    if (validarLetraDigitada(letraDigitada))
    {
        palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);

        posicao = palavraOculta.indexOf(letraDigitada);
        if (posicao == -1)
        {
            chances = chances - 1;
            console.log('\nOPÇÃO ERRADA! Você ainda tem ' + chances + ' chance(s)!');
        }
    }
    else
    {
        console.log ('\nPor favor, digite uma letra válida.');
    }
}

if (palavraOculta == palavraEscolhida)
{
    console.log('--------------VOCÊ VENCEU!!-------------\n');
}
else
{
    console.log('--------------VOCÊ PERDEU!!-------------\n');
}