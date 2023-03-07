let Naves = []

class Nave {
    constructor(nome, qntPassageiros) {
        this.nome = nome
        this.qntPassageiros = qntPassageiros
        this.engatada = false
        this.portasAbertas = false
    }

    engatar(){
        this.engatada = true
        this.portasAbertas = true
    }
}

function menu(){
    let opt
    do{
        opt = Number(prompt("1- Cadastrar nova nave\n2- Imprimir naves\n3- Sair"))
        switch(opt){
            case 1:
                cadastro()
                break
            case 2:
                mostrarNaves(Naves)
                break
            case 3:
                alert("Saindo...")
                opt = -1
                break
            default:
                alert("opcao invalida")
                break
        }
    }while(opt > 0)
}


function cadastro(){
    let nome = prompt("qual nome da nave")
    let qnt = prompt("quantos passageiros tem a nave")
    var novaNave = new Nave(nome, qnt)
    novaNave.engatar()
    Naves.push(novaNave)
}

function mostrarNaves(naves){
    let listaNaves = ""
    naves.forEach((Nave, index) => {
        listaNaves +=    (index + 1) + "- " + Nave.nome + " (" + Nave.qntPassageiros + " tripulantes)\n"
    })
    alert(listaNaves)
}

menu()
