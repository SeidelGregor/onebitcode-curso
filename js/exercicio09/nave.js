do{
    var nomeNave = prompt("digite o nome da nave:")
}while(nomeNave != null && nomeNave != false)
var velocidade = 0

painelControle()

function painelControle(){
    let opt
    do{
        opt = Number(prompt("selecione uma opção\n" + "1 - acelerar\n" + "2 - desacelerar\n" + "3 - mostrar painel de controle\n" + "4- sair"))
        switch(opt){
            
            case 1:
                acelerar()
                break
            case 2:
                desacelerar()
                break
            case 3:
                mostrarPainel()
                break
            case 4:
                opt = -1
                break
            default:
                alert("Invalido")
                opt = 0
                break
        }
    }while(opt>=0)
}
function acelerar(){
    velocidade += 5
}
function desacelerar(){
    if(velocidade <= 0){
        velocidade = 0
    }else{
        velocidade -= 5
    }
}
function mostrarPainel(){
    if(nomeNave == null){
        nomeNave = 'nave'
    }
    console.log(nomeNave + " esta a " + velocidade + "km/s")
}