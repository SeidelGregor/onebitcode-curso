class App{
    constructor(){
        this.nave = null 
    }

    criarNave(){
        let opt
        let nome = prompt("nome da nave")
        let quantidadeTripulantes = prompt("numero de tripulante da nave")
        do{
            opt = Number(prompt("Escolha uma das opções a seguir\n1- Nave batalha\n2- Nave transporte"))
            switch(opt){
                case 1:
                    let quantidadeArmas = prompt("quantidade de armas da nave")
                    this.nave = new naveBatalha(nome, quantidadeTripulantes, quantidadeArmas)
                    break
                case 2:
                    let quantidadeAssentos= prompt("quantidade de assentos da nave")
                    this.nave = new naveTransporte(nome, quantidadeTripulantes, quantidadeAssentos)
                    break
                default:
                    alert("opção invalida")
                    break
            }
        }while(opt != 1 && opt != 2)
    }

    menu(){
        let opt = Number(prompt("Escolha uma das opções a seguir\n1- Acelerar\n2- Trocar nave \n3- Imprimir e sair"))
        switch(opt){
            case 1:
                this.acelerar()
                return true
            case 2:
                this.criarNave()
                return true
            case 3:
                this.imprimirESair()
                return false
            default:
                alert("opção invalida")
                return true
        }
    }

    acelerar(){
        let aceleracao = Number(prompt("Quanto deseja acelerar?"))
        this.nave.acelerar(aceleracao)
    }

    imprimirESair(){
        alert("Nome: " + this.nave.nome + "\n" + 
        "Quantidade de tripulates: " + this.nave.quantidadeTripulantes + "\n" +
        "Velocidade atual: " + this.nave.velocidadeAtual + "\n")
    }

    iniciar(){
        let rodando = true
        while (rodando){
            if(this.nave == null){
                this.criarNave()
            }else{
                rodando = this.menu()
            }
        }
    }
}