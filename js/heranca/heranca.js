class cliente{
    constructor(nome, sexo, rg, cpf){
        this.nome = nome
        this.sexo = sexo
        this.rg = rg
        this.cpf = cpf
    }
}

class clienteVIP extends cliente{
    desconto(valor){
       return valor -= (valor * 0.05)
    }
}

let jose = new cliente("José", "masculino", "99.999.999-99", "999999999/99")

let maria = new clienteVIP("Maria", "feminino", "00.000.000-00", "000000000/00")

console.log(jose)
console.log(maria)

let preco = 100.00

console.log(jose.nome + "pagou " + preco)

console.log(maria.nome + "pagou " + maria.desconto(preco))