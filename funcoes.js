function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
    let palavraOcultaArray = palavraOculta.split('')
  
    for (let i = 0; i < palavraEscolhida.length; i++) {
      if (letraDigitada === palavraEscolhida[i]) {
        palavraOcultaArray[i] = letraDigitada
      }
    }
  
    return palavraOcultaArray.join('')
  }

  function validarLetraDigitada(letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
      return true
    } else {
      return false
    }
  }

  export {atualizarPalavraOculta, validarLetraDigitada};