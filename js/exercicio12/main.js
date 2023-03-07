let nave = {
    nome: null,
    tipo: null,
    velocidadeMaxima: null,
    velocidadeAtual: 0,
    aumentarVelocidade: function (aceleracao){//precisa se declarado dessa forma
        this.velocidadeAtual += aceleracao
    }
}

function cadastro(){

    do{
        nave.nome = prompt("Informe o nome da nave: ")
    }while(nave.nome === null)

    do{
        nave.tipo = prompt("Informe o tipo da nave: ")
    }while(nave.tipo === null)
    
    do{
        nave.velocidadeMaxima = Number(prompt("informe a velocidade maxima da nave em km/s: "))
    }while(nave.velocidadeMaxima === null && nave.velocidadeMaxima < 0)
}

function menu(){
    
    do{
        let escolha = Number(prompt("escolha uma opcao:\n1- acelerar \n2- parar"))
        switch(escolha){
            case 1:
                acelerar()
                break
            case 2:
                parar()
                break
            default:
                alert("opcao invalida")
                break
        }
    }while(nave.velocidadeAtual >= 0)
}

function acelerar(){
    let aceleracao = Number(prompt("quanto deseja acelerar?"))
    alert(aceleracao)
    nave.aumentarVelocidade(aceleracao)
    alert(nave.velocidadeAtual)
    if(nave.velocidadeAtual > nave.velocidadeMaxima){
        alert("velocidade maxima excedida")
        alert("velocidade maxima: " + nave.velocidadeMaxima + "\nvelocidade atual: " + nave.velocidadeAtual)
    }
}

function parar(){
    if(nave.nome == null){
        nave.nome = "nave"
    }
    if(nave.tipo == null){
        nave.tipo = "indefinido"
    }

    alert("Nome: " + nave.nome + "\nTipo: " + nave.tipo + "\nVelocidade atual: " + nave.velocidadeAtual)
    nave.velocidadeAtual = -1
}

cadastro()
menu()