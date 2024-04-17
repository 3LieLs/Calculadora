var numeros = "", resultadoTotal = 0
var numerosTotal = [], iNum = 0
var operadoresTotal = [], iOpe = 0

var calculo = document.querySelector('p#calculo')
var resultado = document.querySelector('p#resultado')


var num0 = document.querySelector('input#num0')
num0.addEventListener('click', () => {
    numeros += '0'
    resultado.innerHTML = `${numeros}`
})

var num1 = document.querySelector('input#num1')
num1.addEventListener('click', () => {
    numeros += '1'
    resultado.innerHTML = `${numeros}`
})

var num2 = document.querySelector('input#num2')
num2.addEventListener('click', () => {
    numeros += '2'
    resultado.innerHTML = `${numeros}`
})

var num3 = document.querySelector('input#num3')
num3.addEventListener('click', () => {
    numeros += '3'
    resultado.innerHTML = `${numeros}`
})

var num4 = document.querySelector('input#num4')
num4.addEventListener('click', () => {
    numeros += '4'
    resultado.innerHTML = `${numeros}`
})
var num5 = document.querySelector('input#num5')
num5.addEventListener('click', () => {
    numeros += '5'
    resultado.innerHTML = `${numeros}`
})

var num6 = document.querySelector('input#num6')
num6.addEventListener('click', () => {
    numeros += '6'
    resultado.innerHTML = `${numeros}`
})

var num7 = document.querySelector('input#num7')
num7.addEventListener('click', () => {
    numeros += '7'
    resultado.innerHTML = `${numeros}`
})

var num8 = document.querySelector('input#num8')
num8.addEventListener('click', () => {
    numeros += '8'
    resultado.innerHTML = `${numeros}`
})

var num9 = document.querySelector('input#num9')
num9.addEventListener('click', () => {
    numeros += '9'
    resultado.innerHTML = `${numeros}`
})


var somar = document.querySelector('input#somar')
somar.addEventListener('click', () => {
    operadoresTotal[iOpe] = `somar`
    Number(numeros)
    numerosTotal[iNum] = numeros

    numeros = ''
    resultado.innerHTML = `${numeros}`
    calculo.insertAdjacentHTML('beforeend', `${numerosTotal[iNum]} + `)

    iOpe++
    iNum++
})

var subtrair = document.querySelector('input#subtrair')
subtrair.addEventListener('click', () => {
    operadoresTotal[iOpe] = `subtrair`
    Number(numeros)
    numerosTotal[iNum] = numeros

    numeros = ''
    resultado.innerHTML = `${numeros}`
    calculo.insertAdjacentHTML('beforeend', `${numerosTotal[iNum]} - `)

    iOpe++
    iNum++
})

var multiplicar = document.querySelector('input#multiplicar')
multiplicar.addEventListener('click', () => {
    operadoresTotal[iOpe] = `multiplicar`
    Number(numeros)
    numerosTotal[iNum] = numeros

    numeros = ''
    resultado.innerHTML = `${numeros}`
    calculo.insertAdjacentHTML('beforeend', `${numerosTotal[iNum]} * `)

    iOpe++
    iNum++
})

var dividir = document.querySelector('input#dividir')
dividir.addEventListener('click', () => {
    operadoresTotal[iOpe] = `dividir`
    Number(numeros)
    numerosTotal[iNum] = numeros

    numeros = ''
    resultado.innerHTML = `${numeros}`
    calculo.insertAdjacentHTML('beforeend', `${numerosTotal[iNum]} / `)

    iOpe++
    iNum++
})

var resto = document.querySelector('input#resto')
resto.addEventListener('click', () => {
    operadoresTotal[iOpe] = `somar`
    Number(numeros)
    numerosTotal[iNum] = numeros

    numeros = ''
    resultado.innerHTML = `${numeros}`
    calculo.insertAdjacentHTML('beforeend', `${numerosTotal[iNum]} % `)

    iOpe++
    iNum++
})


var limparRegistro = document.querySelector('input#limparRegistro')
//limparRegistro.addEventListener('click', funcaoCalculo)

var limpar = document.querySelector('input#limpar')
limpar.addEventListener('click', () => {
    numeros = ''
    resultado.innerText = `${numeros}`
    calculo.innerText = ``

        operadoresTotal.splice(0, operadoresTotal.length)
        numerosTotal.splice(0, numerosTotal.length)

    resultadoTotal = 0
    iOpe = 0
    iNum = 0
})

var deletar = document.querySelector('input#deletar')
deletar.addEventListener('click', () => {
    numeros = numeros.slice(0, -1)
    resultado.innerHTML = `${numeros}`
})

var calcular = document.querySelector('input#calcular')
calcular.addEventListener('click', () => {
    Number(numeros)

    resultadoTotal = parseFloat(numerosTotal[0])

    for (let x = 1; x < numerosTotal.length; x++) {
        if (operadoresTotal[x-1] == "somar") {
            resultadoTotal += parseFloat(numerosTotal[x])
        }

        if (operadoresTotal[x-1] == "subtrair") {
            resultadoTotal -= parseFloat(numerosTotal[x])
        }

        if (operadoresTotal[x-1] == "multiplicar") {
            resultadoTotal *= parseFloat(numerosTotal[x])
        }

        if (operadoresTotal[x-1] == "dividir") {
            resultadoTotal /= parseFloat(numerosTotal[x])
        }

        iNum++
    }

    if (operadoresTotal[numerosTotal.length-1] == "somar") {
        if (numeros == '') {
            numeros = ''
        } else {
            resultadoTotal += parseFloat(numeros)
        }
    }

    if (operadoresTotal[numerosTotal.length-1] == "subtrair") {
        if (numeros == '') {
            numeros = ''
        } else {
            resultadoTotal -= parseFloat(numeros)
        }
    }

    if (operadoresTotal[numerosTotal.length-1] == "multiplicar") {
        if (numeros == '') {
            numeros = ''
        } else {
            resultadoTotal *= parseFloat(numeros)
        }
    }

    if (operadoresTotal[numerosTotal.length-1] == "dividir") {
        if (numeros == '') {
            numeros = ''
        } else {
            resultadoTotal /= parseFloat(numeros)
        }
    }

    calculo.insertAdjacentHTML('beforeend', ` ${numeros} = `)
    resultado.innerHTML = `${resultadoTotal}`
})

var virgula = document.querySelector('input#virgula')
//virgula.addEventListener('click', funcaoCalculo)