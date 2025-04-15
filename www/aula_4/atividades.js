/*
===========================================
📘 Exercícios de Funções em JavaScript
💡 Nível: Iniciante
🎯 Objetivo:
Praticar a criação e o uso de funções em JavaScript,
utilizando a palavra-chave 'function' e a declaração de variáveis com 'var'.

🚀 Bons estudos!

1 - Converter Celsius para Fahrenheit
Crie uma função converterParaFahrenheit que receba a temperatura em Celsius e retorne o valor em Fahrenheit usando a fórmula:
F = (C × 1.8) + 32

2- Calcular média de 3 notas
Crie uma função mediaNotas que receba três números e retorne a média.

3 - Quadrado de um número
Crie uma função quadrado que receba um número e retorne o número ao quadrado.

4 - Converter minutos em segundos
Crie uma função minutosParaSegundos que receba um número de minutos e retorne quantos segundos tem.
segundos = minutos * 60

5 - Converter horas em minutos
Crie uma função horasParaMinutos que receba um número de horas e retorne o total em minutos.
minutos = horas / 60

6 - Verificar se dois nomes são iguais
Crie uma função nomesIguais que receba dois nomes e exiba "Iguais" se forem iguais, e "Diferentes" caso contrário.


===========================================
*/

//atividade 1
function converterParaFahrenheit(celcius) {
    var conversao = celcius * 1.8 + 32
    return conversao
}

var temperatura = converterParaFahrenheit(30);
console.log("A Temperatura convertida para Fahrenheit será igual a: " + temperatura)


//atividade 2
function mediaNotas(a, b ,c) {
    var resultado = a + b + c / 3
    return resultado
}

var mediaFinal = mediaNotas(5,5,5)
console.log("Sua média final foi de: " + mediaFinal)


//atividade 3
function quadrado(numero) {
    var resultado = numero ** 2
    return resultado
}

var exponencial = quadrado(5)
console.log(exponencial)


//atividade 4
function minutosParaSegundos(minutos) {
    var resultado = minutos * 60
    return resultado
}

var conversao = minutosParaSegundos(3)
console.log(conversao + " segundos")


//atividade 5
function horasParaMinutos(hora) {
    var resultado = hora * 60
    return resultado
}

var conversao = horasParaMinutos(3)
console.log(conversao + " Minutos")


//atividade 6
function nomesIguais(nome1, nome2) {
    if (nome1 == nome2){
        console.log("Igual")
    } else {
        console.log("Diferente")
    }
        
}

nomesIguais("Vitor", "Ramon")
nomesIguais("Vitor", "Vitor")
    