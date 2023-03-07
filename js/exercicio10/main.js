

function parada(velocidade, desaceleracao, escrever){
    while(velocidade > 0){
        escrever(velocidade)
        velocidade -= desaceleracao
    }
    console.log("nave parada, seguro abrir comportas")
}


/*chama a função parada que tem como parametro a função escrever que retorna uma 
mensagem informando a velocidade atual*/
parada(150, 20, velocidade => console.log("velocidade atual é de " + velocidade + "km/s"))