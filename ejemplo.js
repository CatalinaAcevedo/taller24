// calcular el IMC
let p,a
function calculo(p, a) //definicion de variables
{
    return p/(a^2);
}

let peso =prompt('Ingresa tu peso en kilogramos'); //asignar valor a peso
let altura =prompt('Ingresa tu altura en metros'); //asignar valor a altura
let resultado =calculo(peso, altura)
alert (resultado)
