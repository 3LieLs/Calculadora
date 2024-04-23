var navegacaoAbertoFechado = false
botaoNavegacao = document.querySelector('input#botaoNavegacao')
botaoNavegacao.addEventListener('click', () => {
    if (navegacaoAbertoFechado == false) {
        navegacaoAbertoFechado = true
        menuNavegacao.style.width = '85%'
        menuNavegacao.style.visibility = 'visible'
    } else {
        navegacaoAbertoFechado = false
        menuNavegacao.style.width = '0px'
        menuNavegacao.style.visibility = 'hidden'
    }
})

var historicoAbertoFechado = false
botaoHistorico = document.querySelector('input#botaoHistorico')
botaoHistorico.addEventListener('click', () => {
    if (historicoAbertoFechado == false) {
        historicoAbertoFechado = true
        historico.style.height = '60%'
        historico.style.visibility = 'visible'
    } else {
        historicoAbertoFechado = false
        historico.style.height = '0px'
        historico.style.visibility = 'hidden'
    }
})

var hist = 0
limparHistorico = document.querySelector('input#limparHistorico')
limparHistorico.addEventListener('click', () => {
    if (hist > 0) {
        let y = hist
        for (let x = 0; x < y; x++) {
            historico.removeChild(historico.lastElementChild);
            hist--
        }
    }
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CALCULADORA PADRÃO----ESCOLHA CALCULADORA PADRÃO----ESCOLHA CALCULADORA PADRÃO----ESCOLHA CALCULADORA PADRÃO--*/
botaoCalculadoraPadrao = document.querySelector('input#botaoCalculadoraPadrao')
botaoCalculadoraPadrao.addEventListener('click', () => {
    reset()
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    categoria.innerHTML = 'Padrão'
    mainCalculadoraDisplay.style.visibility = 'visible'
    botoesCalculadoraPadrao.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CALCULADORA CIENTÍFICA----ESCOLHA CALCULADORA CIENTÍFICA----ESCOLHA CALCULADORA CIENTÍFICA----ESCOLHA CALCULADORA CIENTÍFICA--*/
botaoCalculadoraCientifica = document.querySelector('input#botaoCalculadoraCientifica')
botaoCalculadoraCientifica.addEventListener('click', () => {
    reset()
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    categoria.innerHTML = 'Científica'
    mainCalculadoraDisplay.style.visibility = 'visible'
    botoesCalculadoraCientifica.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR VOLUME----ESCOLHA CONVERSOR VOLUME----ESCOLHA CONVERSOR VOLUME----ESCOLHA CONVERSOR VOLUME--*/
var volumeDisplay = false
botaoVolume = document.querySelector('input#botaoVolume')
botaoVolume.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    volumeDisplay = true
    categoria.innerHTML = 'Volume'
    mainConversorVolume.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR COMPRIMENTO----ESCOLHA CONVERSOR COMPRIMENTO----ESCOLHA CONVERSOR COMPRIMENTO----ESCOLHA CONVERSOR COMPRIMENTO--*/
var comprimentoDisplay = false
botaoComprimento = document.querySelector('input#botaoComprimento')
botaoComprimento.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    comprimentoDisplay = true
    categoria.innerHTML = 'Comprimento'
    mainConversorComprimento.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR TEMPERATURA----ESCOLHA CONVERSOR TEMPERATURA----ESCOLHA CONVERSOR TEMPERATURA----ESCOLHA CONVERSOR TEMPERATURA--*/
var temperaturaDisplay = false
botaoTemperatura = document.querySelector('input#botaoTemperatura')
botaoTemperatura.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    temperaturaDisplay = true
    categoria.innerHTML = 'Temperatura'
    mainConversorTemperatura.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR PESO----ESCOLHA CONVERSOR PESO----ESCOLHA CONVERSOR PESO----ESCOLHA CONVERSOR PESO--*/
var pesoDisplay = false
botaoPeso = document.querySelector('input#botaoPeso')
botaoPeso.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    pesoDisplay = true
    categoria.innerHTML = 'Peso'
    mainConversorPeso.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR ÁREA----ESCOLHA CONVERSOR ÁREA----ESCOLHA CONVERSOR ÁREA----ESCOLHA CONVERSOR ÁREA--*/
var areaDisplay = false
botaoArea = document.querySelector('input#botaoArea')
botaoArea.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    areaDisplay = true
    categoria.innerHTML = 'Area'
    mainConversorArea.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR VELOCIDADE----ESCOLHA CONVERSOR VELOCIDADE----ESCOLHA CONVERSOR VELOCIDADE----ESCOLHA CONVERSOR VELOCIDADE--*/
var velocidadeDisplay = false
botaoVelocidade = document.querySelector('input#botaoVelocidade')
botaoVelocidade.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    velocidadeDisplay = true
    categoria.innerHTML = 'Velocidade'
    mainConversorVelocidade.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CONVERSOR TEMPO----ESCOLHA CONVERSOR TEMPO----ESCOLHA CONVERSOR TEMPO----ESCOLHA CONVERSOR TEMPO--*/
var tempoDisplay = false
botaoTempo = document.querySelector('input#botaoTempo')
botaoTempo.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    tempoDisplay = true
    categoria.innerHTML = 'Tempo'
    mainConversorTempo.style.visibility = 'visible'
    botoesGeralConv.style.visibility = 'visible'
})
/*--------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------*/
function displayNoneAll() {
    mainCalculadoraDisplay.style.visibility = 'hidden'
    botoesCalculadoraPadrao.style.visibility = 'hidden'
    botoesCalculadoraCientifica.style.visibility = 'hidden'

    mainConversorVolume.style.visibility = 'hidden'
    volumeDisplay = false

    mainConversorComprimento.style.visibility = 'hidden'
    comprimentoDisplay = false

    mainConversorTemperatura.style.visibility = 'hidden'
    temperaturaDisplay = false

    mainConversorPeso.style.visibility = 'hidden'
    pesoDisplay = false

    mainConversorArea.style.visibility = 'hidden'
    areaDisplay = false

    mainConversorVelocidade.style.visibility = 'hidden'
    velocidadeDisplay = false

    mainConversorTempo.style.visibility = 'hidden'
    tempoDisplay = false
    
    botoesGeralConv.style.visibility = 'hidden'
}
/*--------------------------------------------------------------------------------------------------------*/