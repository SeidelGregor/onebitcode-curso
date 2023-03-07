class cliente  {
    constructor (nome, idade, tipoFiscal){
        this.nome = nome
        this.idade = idade
        this.tipoFiscal = tipoFiscal
    }
}

let jose = new cliente("José", 51, "pessoa fisica")

console.log(jose)