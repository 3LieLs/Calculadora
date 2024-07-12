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