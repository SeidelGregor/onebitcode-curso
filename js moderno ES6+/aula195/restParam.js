//usando spread na função ele vai usar todos os paramentros passados a partir do segundo
function enviarMensagem(mensagem, ...nomes){
    nomes.forEach(nome => {console.log(`${mensagem}, ${nome}!`)});
}

enviarMensagem("seja bem vindo", "Pedro", "João", "Marcos");