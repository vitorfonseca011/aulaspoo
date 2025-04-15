class pessoa {
    nome;
    idade;
    jogo_favorito;
    pc_ou_console;


    falar() {
        console.log("Eae! Eu sou o " + this.nome + ", tenho " + this.idade + " anos " + ", meu jogo favorito é " + this.jogo_favorito + " e jogo no " + this.pc_ou_console);
    }
}

//criando um objeto
var pessoa1 = new pessoa();
pessoa1.nome = "Vitor";
pessoa1.idade = 16;
pessoa1.jogo_favorito = "The Witcher 3"
pessoa1.pc_ou_console = "Pc"

var pessoa2 = new pessoa();
pessoa2.nome = "Luiz"
pessoa2.idade = 25;
pessoa2.jogo_favorito = "Ghost of Tsushima"
pessoa2.pc_ou_console = "Console"

//chamando um método do objeto  
pessoa1.falar();

pessoa2.falar();