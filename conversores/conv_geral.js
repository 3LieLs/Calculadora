var convert1, convert2, convert1Escolha, convert2Escolha, convert1EscolhaInicial, convert2EscolhaInicial, converter

convert1 = temperatura1
convert2 = temperatura2
convert1Escolha = temperatura1Escolha
convert2Escolha = temperatura2Escolha
converter = converterTemp()

setInterval(() => {
    if (volumeDisplay == true) {
        convert1 = volume1
        convert2 = volume2
        convert1Escolha = volume1Escolha
        convert2Escolha = volume2Escolha
        converter = converterVol()
    }

    if (comprimentoDisplay == true) {
        convert1 = comprimento1
        convert2 = comprimento2
        convert1Escolha = comprimento1Escolha
        convert2Escolha = comprimento2Escolha
        converter = converterComp()
    }

    if (temperaturaDisplay == true) {
        convert1 = temperatura1
        convert2 = temperatura2
        convert1Escolha = temperatura1Escolha
        convert2Escolha = temperatura2Escolha
        converter = converterTemp()
    }

    if (pesoDisplay == true) {
        convert1 = peso1
        convert2 = peso2
        convert1Escolha = peso1Escolha
        convert2Escolha = peso2Escolha
        converter = converterPeso()
    }

    if (areaDisplay == true) {
        convert1 = area1
        convert2 = area2
        convert1Escolha = area1Escolha
        convert2Escolha = area2Escolha
        converter = converterArea()
    }

    if (velocidadeDisplay == true) {
        convert1 = velocidade1
        convert2 = velocidade2
        convert1Escolha = velocidade1Escolha
        convert2Escolha = velocidade2Escolha
        converter = converterVelocidade()
    }

    if (tempoDisplay == true) {
        convert1 = tempo1
        convert2 = tempo2
        convert1Escolha = tempo1Escolha
        convert2Escolha = tempo2Escolha
        converter = converterTempo()
    }
}, 1);


/*--NÚMEROS----NÚMEROS----NÚMEROS----NÚMEROS--*/
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
/*--------------------------------------------------------------------------------------------------------*/

/*--OUTROS----OUTROS----OUTROS----OUTROS--*/
var sinalConv = document.querySelector('input#sinalConv')
sinalConv.addEventListener('click', () => {
    convert1.value = Number(convert1.value) * -1
    converter
})

var virgulaAtivConv = false
var virgulaConv = document.querySelector('input#virgulaConv')
virgulaConv.addEventListener('click', () => {
    if (virgulaAtivConv == false) {
        convert1.value += '.'
        virgulaAtivConv = true
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

var limparConv = document.querySelector('input#limparConv')
limparConv.addEventListener('click', () => {
    convert1.value = '0'
    virgulaAtivConv = false
    converter
})

var deletarConv = document.querySelector('input#deletarConv')
deletarConv.addEventListener('click', () => {
    if (convert1.value[convert1.value.length - 1] == '.') {
        virgulaAtivConv = false
    }
    convert1.value = convert1.value.slice(0, -1)
    if (convert1.value == '') {
        convert1.value = '0'
    }
    converter
})
/*--------------------------------------------------------------------------------------------------------*/



/*--CONVERSÃO DE VOLUME----CONVERSÃO DE VOLUME----CONVERSÃO DE VOLUME----CONVERSÃO DE VOLUME--*/
function converterVol() {
    let convert1Val

    if (convert1Escolha.value == 'Mililitros' && convert2Escolha.value == 'Mililitros' || convert1Escolha.value == 'Litros' && convert2Escolha.value == 'Litros') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Mililitros' && convert2Escolha.value == 'Litros') {
        convert1Val = Number(convert1.value) / 1000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Litros' && convert2Escolha.value == 'Mililitros') {
        convert1Val = Number(convert1.value) * 1000
        convert2.value = convert1Val
    }
}

volume1EscolhaInicial = volume1Escolha.value
volume2EscolhaInicial = volume2Escolha.value
setInterval(() => {
    if (volume1EscolhaInicial != convert1Escolha.value) {
        converter
        volume1EscolhaInicial = convert1Escolha.value
    }

    if (volume2EscolhaInicial != convert2Escolha.value) {
        converter
        volume2EscolhaInicial = convert2Escolha.value
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

comprimento1EscolhaInicial = comprimento1Escolha.value
comprimento2EscolhaInicial = comprimento2Escolha.value
setInterval(() => {
    if (comprimento1EscolhaInicial != convert1Escolha.value) {
        converter
        comprimento1EscolhaInicial = convert1Escolha.value
    }

    if (comprimento2EscolhaInicial != convert2Escolha.value) {
        converter
        comprimento2EscolhaInicial = convert2Escolha.value
    }
}, 10);
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

temperatura1EscolhaInicial = temperatura1Escolha.value
temperatura2EscolhaInicial = temperatura2Escolha.value
setInterval(() => {
    if (temperatura1EscolhaInicial != convert1Escolha.value) {
        converter
        temperatura1EscolhaInicial = convert1Escolha.value
    }

    if (temperatura2EscolhaInicial != convert2Escolha.value) {
        converter
        temperatura2EscolhaInicial = convert2Escolha.value
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
    if (peso1EscolhaInicial != convert1Escolha.value) {
        converter
        peso1EscolhaInicial = convert1Escolha.value
    }

    if (peso2EscolhaInicial != convert2Escolha.value) {
        converter
        peso2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/

/*--CONVERSÃO DE ÁREA----CONVERSÃO DE ÁREA----CONVERSÃO DE ÁREA----CONVERSÃO DE ÁREA--*/
function converterArea() {
    let convert1Val

    if (convert1Escolha.value == 'Centimetros quadrados' && convert2Escolha.value == 'Centimetros quadrados' || convert1Escolha.value == 'Metros quadrados' && convert2Escolha.value == 'Metros quadrados' || convert1Escolha.value == 'Quilometros quadrados' && convert2Escolha.value == 'Quilometros quadrados') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Centimetros quadrados' && convert2Escolha.value == 'Metros quadrados') {
        convert1Val = Number(convert1.value) / 10000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Centimetros quadrados' && convert2Escolha.value == 'Quilometros quadrados') {
        convert1Val = Number(convert1.value) / 10000000000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Metros quadrados' && convert2Escolha.value == 'Centimetros quadrados') {
        convert1Val = Number(convert1.value) * 10000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Metros quadrados' && convert2Escolha.value == 'Quilometros quadrados') {
        convert1Val = Number(convert1.value) / 1000000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilometros quadrados' && convert2Escolha.value == 'Centimetros quadrados') {
        convert1Val = Number(convert1.value) * 10000000000
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilometros quadrados' && convert2Escolha.value == 'Metros quadrados') {
        convert1Val = Number(convert1.value) * 1000000
        convert2.value = convert1Val
    }
}

area1EscolhaInicial = area1Escolha.value
area2EscolhaInicial = area2Escolha.value
setInterval(() => {
    if (area1EscolhaInicial != convert1Escolha.value) {
        converter
        area1EscolhaInicial = convert1Escolha.value
    }

    if (area2EscolhaInicial != convert2Escolha.value) {
        converter
        area2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/

/*--CONVERSÃO DE VELOCIDADE----CONVERSÃO DE VELOCIDADE----CONVERSÃO DE VELOCIDADE----CONVERSÃO DE VELOCIDADE--*/
function converterVelocidade() {
    let convert1Val

    if (convert1Escolha.value == 'Centimetros por segundo' && convert2Escolha.value == 'Centimetros por segundo' || convert1Escolha.value == 'Metros por segundo' && convert2Escolha.value == 'Metros por segundo' || convert1Escolha.value == 'Quilometros por hora' && convert2Escolha.value == 'Quilometros por hora') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Centimetros por segundo' && convert2Escolha.value == 'Metros por segundo') {
        convert1Val = Number(convert1.value) / 100
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Centimetros por segundo' && convert2Escolha.value == 'Quilometros por hora') {
        convert1Val = Number(convert1.value) / 27.778
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Metros por segundo' && convert2Escolha.value == 'Centimetros por segundo') {
        convert1Val = Number(convert1.value) * 100
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Metros por segundo' && convert2Escolha.value == 'Quilometros por hora') {
        convert1Val = Number(convert1.value) / 3.6
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilometros por hora' && convert2Escolha.value == 'Centimetros por segundo') {
        convert1Val = Number(convert1.value) * 27,778
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Quilometros por hora' && convert2Escolha.value == 'Metros por segundo') {
        convert1Val = Number(convert1.value) / 3,6
        convert2.value = convert1Val
    }
}

velocidade1EscolhaInicial = velocidade1Escolha.value
velocidade2EscolhaInicial = velocidade2Escolha.value
setInterval(() => {
    if (velocidade1EscolhaInicial != convert1Escolha.value) {
        converter
        velocidade1EscolhaInicial = convert1Escolha.value
    }

    if (velocidade2EscolhaInicial != convert2Escolha.value) {
        converter
        velocidade2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/

/*--CONVERSÃO DE TEMPO----CONVERSÃO DE TEMPO----CONVERSÃO DE TEMPO----CONVERSÃO DE TEMPO--*/
function converterTempo() {
    let convert1Val

    if (convert1Escolha.value == 'Segundos' && convert2Escolha.value == 'Segundos' || convert1Escolha.value == 'Minutos' && convert2Escolha.value == 'Minutos' || convert1Escolha.value == 'Horas' && convert2Escolha.value == 'Horas') {
        convert2.value = convert1.value
    }

    if (convert1Escolha.value == 'Segundos' && convert2Escolha.value == 'Minutos') {
        convert1Val = Number(convert1.value) / 60
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Segundos' && convert2Escolha.value == 'Horas') {
        convert1Val = Number(convert1.value) / 3600
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Minutos' && convert2Escolha.value == 'Segundos') {
        convert1Val = Number(convert1.value) * 60
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Minutos' && convert2Escolha.value == 'Horas') {
        convert1Val = Number(convert1.value) / 60
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Horas' && convert2Escolha.value == 'Segundos') {
        convert1Val = Number(convert1.value) * 3600
        convert2.value = convert1Val
    }

    if (convert1Escolha.value == 'Horas' && convert2Escolha.value == 'Minutos') {
        convert1Val = Number(convert1.value) * 60
        convert2.value = convert1Val
    }
}

tempo1EscolhaInicial = tempo1Escolha.value
tempo2EscolhaInicial = tempo2Escolha.value
setInterval(() => {
    if (tempo1EscolhaInicial != convert1Escolha.value) {
        converter
        tempo1EscolhaInicial = convert1Escolha.value
    }

    if (tempo2EscolhaInicial != convert2Escolha.value) {
        converter
        tempo2EscolhaInicial = convert2Escolha.value
    }
}, 10);
/*--------------------------------------------------------------------------------------------------------*/