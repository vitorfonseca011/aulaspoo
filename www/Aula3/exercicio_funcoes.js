function subtrairNumero(numero1, numero2) {
    var resultado = numero1 - numero2;
    console.log("O resultado da subtração é: " + resultado)
}

subtrairNumero(10, 5)
subtrairNumero(10, 8)
subtrairNumero(100, 50)

function idadePessoa(idade) {
    if (idade <=17) {
        console.log("Você é menor de idade")
    } else {
        console.log("Você é maior de idade")
    }
}

idadePessoa(19)

function retangulo(base, altura) {
    var resultado = base * altura
    console.log("A area total do retangulo é de: " + resultado + "m²")
}

retangulo(7, 3)

function endereco(rua,numero,bairro,cidade,estado,cep) {
    var enderecoCompleto = rua + numero + bairro + cidade + estado + cep
    console.log("Dados recebidos, seu endereço é: " + enderecoCompleto )
}

endereco("Rua Cabreúva ", 345, " Jacare ", " Cabreúva ", " São Paulo ", " 27600-000 ")

