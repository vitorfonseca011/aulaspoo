class Carro {
    marca;
    modelo;
    ano;

    ligar() {
        console.log("O carro está ligado")
    }
}

let meuCarro = new Carro();
meuCarro.marca = "Toyota"
meuCarro.modelo = "Corolla"
meuCarro.ano = 2018;

console.log(meuCarro.marca)
console.log(meuCarro.modelo)
console.log(meuCarro.ano)
meuCarro.ligar()
    