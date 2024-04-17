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
/*--------------------------------------------------------------------------------------------------------*/

/*--ESCOLHA CALCULADORA PADRÃO----ESCOLHA CALCULADORA PADRÃO----ESCOLHA CALCULADORA PADRÃO----ESCOLHA CALCULADORA PADRÃO--*/
botaoCalculadoraPadrao = document.querySelector('input#botaoCalculadoraPadrao')
botaoCalculadoraPadrao.addEventListener('click', () => {
    navegacaoAbertoFechado = false
    menuNavegacao.style.width = '0px'
    menuNavegacao.style.visibility = 'hidden'

    displayNoneAll()
    categoria.innerHTML = 'Padrão'
    mainCalculadoraPadrao.style.visibility = 'visible'
    botoesCalculadoraPadrao.style.visibility = 'visible'
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

/*--------------------------------------------------------------------------------------------------------*/
function displayNoneAll() {
    mainCalculadoraPadrao.style.visibility = 'hidden'
    botoesCalculadoraPadrao.style.visibility = 'hidden'
    mainConversorTemperatura.style.visibility = 'hidden'
    temperaturaDisplay = false
    mainConversorComprimento.style.visibility = 'hidden'
    comprimentoDisplay = false
    mainConversorPeso.style.visibility = 'hidden'
    pesoDisplay = false
    botoesGeralConv.style.visibility = 'hidden'
}
/*--------------------------------------------------------------------------------------------------------*/