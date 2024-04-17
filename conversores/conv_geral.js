var convert1, convert2, convert1Escolha, convert2Escolha, convert1EscolhaInicial, convert2EscolhaInicial, converter

convert1 = temp1
convert2 = temp2
convert1Escolha = temp1Escolha
convert2Escolha = temp2Escolha
converter = converterTemp()

setInterval(() => {
    if (temperaturaDisplay == true) {
        convert1 = temp1
        convert2 = temp2
        convert1Escolha = temp1Escolha
        convert2Escolha = temp2Escolha
        converter = converterTemp()
    }

    if (comprimentoDisplay == true) {
        convert1 = comp1
        convert2 = comp2
        convert1Escolha = comp1Escolha
        convert2Escolha = comp2Escolha
        converter = converterComp()
    }

    if (pesoDisplay == true) {
        convert1 = peso1
        convert2 = peso2
        convert1Escolha = peso1Escolha
        convert2Escolha = peso2Escolha
        converter = converterPeso()
    }
}, 1);

var num0Conv = document.querySelector('input#num0Conv')
num0Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '0'
    } else {
        convert1.value += '0'
    }
    converter
})

var num1Conv = document.querySelector('input#num1Conv')
num1Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '1'
    } else {
        convert1.value += '1'
    }
    converter
})

var num2Conv = document.querySelector('input#num2Conv')
num2Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '2'
    } else {
        convert1.value += '2'
    }
    converter
})

var num3Conv = document.querySelector('input#num3Conv')
num3Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '3'
    } else {
        convert1.value += '3'
    }
    converter
})

var num4Conv = document.querySelector('input#num4Conv')
num4Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '4'
    } else {
        convert1.value += '4'
    }
    converter
})
var num5Conv = document.querySelector('input#num5Conv')
num5Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '5'
    } else {
        convert1.value += '5'
    }
    converter
})

var num6Conv = document.querySelector('input#num6Conv')
num6Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '6'
    } else {
        convert1.value += '6'
    }
    converter
})

var num7Conv = document.querySelector('input#num7Conv')
num7Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '7'
    } else {
        convert1.value += '7'
    }
    converter
})

var num8Conv = document.querySelector('input#num8Conv')
num8Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '8'
    } else {
        convert1.value += '8'
    }
    converter
})

var num9Conv = document.querySelector('input#num9Conv')
num9Conv.addEventListener('click', () => {
    if (convert1.value == '0') {
        convert1.value = '9'
    } else {
        convert1.value += '9'
    }
    converter
})



var limparConv = document.querySelector('input#limparConv')
limparConv.addEventListener('click', () => {
    convert1.value = '0'
    virgula = false
    converter
})

var deletarConv = document.querySelector('input#deletarConv')
deletarConv.addEventListener('click', () => {
    if (convert1.value[convert1.value.length - 1] == '.') {
        virgula = false
    }
    convert1.value = convert1.value.slice(0, -1)
    if (convert1.value == '') {
        convert1.value = '0'
    }
    converter
})

var sinalConv = document.querySelector('input#sinalConv')
sinalConv.addEventListener('click', () => {
    convert1.value = Number(convert1.value) * -1
    converter
})

var virgula = false
var virgulaConv = document.querySelector('input#virgulaConv')
virgulaConv.addEventListener('click', () => {
    if (virgula == false) {
        convert1.value += '.'
        virgula = true
        converter
    }
})

var inverterConv = document.querySelector('input#inverterConv')
inverterConv.addEventListener('click', () => {
    let temp1EscolhaAntigo = convert1Escolha.value
    convert1Escolha.value = convert2Escolha.value
    convert2Escolha.value = temp1EscolhaAntigo
    converter
})
/*--------------------------------------------------------------------------------------------------------*/

/*--CONVERSÃO DE TEMPERATURA----CONVERSÃO DE TEMPERATURA----CONVERSÃO DE TEMPERATURA----CONVERSÃO DE TEMPERATURA--*/
function converterTemp() {
    let convert1Val

    if (convert1Escolha.value == 'Celsius' && convert2Escolha.value == 'Celsius' || convert1Escolha.value == 'Fahrenheit' && convert2Escolha.value == 'Fahrenheit' || convert1Escolha.value == 'Kelvin' && convert2Escolha.value == 'Kelvin') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Celsius' && convert2Escolha.value == 'Fahrenheit') {
        convert1Val = Number(convert1.value) * 1.8 + 32
        convert1Val = convert1Val.toFixed(2)
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Celsius' && convert2Escolha.value == 'Kelvin') {
        convert1Val = Number(convert1.value) + 273.15
        convert1Val = convert1Val.toFixed(2)
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Fahrenheit' && convert2Escolha.value == 'Celsius') {
        convert1Val = (Number(convert1.value) - 32) / 1.8
        convert1Val = convert1Val.toFixed(2)
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Fahrenheit' && convert2Escolha.value == 'Kelvin') {
        convert1Val = (((Number(convert1.value) - 32) / 9) * 5) + 273.15
        convert1Val = convert1Val.toFixed(2)
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Kelvin' && convert2Escolha.value == 'Celsius') {
        convert1Val = Number(convert1.value) - 273.15
        convert1Val = convert1Val.toFixed(2)
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Kelvin' && convert2Escolha.value == 'Fahrenheit') {
        convert1Val = (((Number(convert1.value) - 273.15) / 5) * 9) + 32
        convert1Val = convert1Val.toFixed(2)
        convert2.value = convert1Val
    }
}

temp1EscolhaInicial = temp1Escolha.value
temp2EscolhaInicial = temp2Escolha.value
setInterval(() => {
    if (temp1EscolhaInicial != convert1Escolha.value) {
        converter
        temp1EscolhaInicial = convert1Escolha.value
    }

    if (temp2EscolhaInicial != convert2Escolha.value) {
        converter
        temp2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/

/*--CONVERSÃO DE COMPRIMENTO----CONVERSÃO DE COMPRIMENTO----CONVERSÃO DE COMPRIMENTO----CONVERSÃO DE COMPRIMENTO--*/
function converterComp() {
    let convert1Val

    if (convert1Escolha.value == 'Centimetros' && convert2Escolha.value == 'Centimetros' || convert1Escolha.value == 'Metros' && convert2Escolha.value == 'Metros' || convert1Escolha.value == 'Quilometros' && convert2Escolha.value == 'Quilometros') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Centimetros' && convert2Escolha.value == 'Metros') {
        convert1Val = Number(convert1.value) / 100
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Centimetros' && convert2Escolha.value == 'Quilometros') {
        convert1Val = Number(convert1.value) / 100000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Metros' && convert2Escolha.value == 'Centimetros') {
        convert1Val = Number(convert1.value) * 100
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Metros' && convert2Escolha.value == 'Quilometros') {
        convert1Val = Number(convert1.value) / 1000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilometros' && convert2Escolha.value == 'Centimetros') {
        convert1Val = Number(convert1.value) * 100000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilometros' && convert2Escolha.value == 'Metros') {
        convert1Val = Number(convert1.value) * 1000
        convert2.value = convert1Val
    }
}

comp1EscolhaInicial = comp1Escolha.value
comp2EscolhaInicial = comp2Escolha.value
setInterval(() => {
    if (comp1EscolhaInicial != convert1Escolha.value) {
        converter
        comp1EscolhaInicial = convert1Escolha.value
    }

    if (comp2EscolhaInicial != convert2Escolha.value) {
        converter
        comp2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/

/*--CONVERSÃO DE PESO----CONVERSÃO DE PESO----CONVERSÃO DE PESO----CONVERSÃO DE PESO--*/
function converterPeso() {
    let convert1Val

    if (convert1Escolha.value == 'Miligramas' && convert2Escolha.value == 'Miligramas' || convert1Escolha.value == 'Gramas' && convert2Escolha.value == 'Gramas' || convert1Escolha.value == 'Quilogramas' && convert2Escolha.value == 'Quilogramas') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Miligramas' && convert2Escolha.value == 'Gramas') {
        convert1Val = Number(convert1.value) / 1000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Miligramas' && convert2Escolha.value == 'Quilogramas') {
        convert1Val = Number(convert1.value) / 1000000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Gramas' && convert2Escolha.value == 'Miligramas') {
        convert1Val = Number(convert1.value) * 1000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Gramas' && convert2Escolha.value == 'Quilogramas') {
        convert1Val = Number(convert1.value) / 1000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilogramas' && convert2Escolha.value == 'Miligramas') {
        convert1Val = Number(convert1.value) * 1000000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilogramas' && convert2Escolha.value == 'Gramas') {
        convert1Val = Number(convert1.value) * 1000
        convert2.value = convert1Val
    }
}

peso1EscolhaInicial = peso1Escolha.value
peso2EscolhaInicial = peso2Escolha.value
setInterval(() => {
    if (comp1EscolhaInicial != convert1Escolha.value) {
        converter
        comp1EscolhaInicial = convert1Escolha.value
    }

    if (comp2EscolhaInicial != convert2Escolha.value) {
        converter
        comp2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/