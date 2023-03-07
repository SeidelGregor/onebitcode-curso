class nave{
    static get taxaDesaceleracao(){
        return 0.17
    }

    constructor(nome, quantidadeTripulantes){
        this.nome = nome
        this.quantidadeTripulantes = quantidadeTripulantes
        this.velocidadeAtual = 0
    }

    acelerar(aceleracao){
        this.velocidadeAtual += Number(aceleracao) * (1 - nave.taxaDesaceleracao)
    }
}