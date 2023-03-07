function enviarEndereco(){
    const lista = novaLista()
    const btm = novoBotao()
    lista.appendChild(btm)
    document.getElementById("lista-endereco").appendChild(lista)
}

function novaLista(){
    const rua = document.getElementById("rua").value
    const numero = document.getElementById("numero").value
    const bairro = document.getElementById("bairro").value
    const cep = document.getElementById("cep").value

    const endereco = "Rua: " + rua + "\n" + "Número: " + numero + "\n" + "Bairro: " + bairro + "\n" + "CEP: " + cep + "\n"

    const lista = document.createElement("p")//cria um elemento html e tem como parametro a tag que sera usada
    lista.innerText = endereco
    console.log(lista)
    return lista
}

function novoBotao(){
    const removeButton = document.createElement("button")
    removeButton.innerText = "Remover"
    removeButton.type = "button"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    //quando for clicado chama a função removeHouse que tem como parametro o priprio elemento
    return removeButton
    
}

function removeHouse(botao){
    const remover = botao.parentNode//referencia o pai de botao
    document.getElementById("lista-endereco").removeChild(remover)
    /*pega o elemento com id lista-endereço e seleciona o elemento
    filho que deve ser removido que no caso é o elemento pai de botao*/
}