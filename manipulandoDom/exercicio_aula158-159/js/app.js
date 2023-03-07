function tipoMoradia(){
    const tipoMoradia = document.querySelector("select#tipo-moradia option:checked").value;
    return tipoMoradia;
}
function novaCasa(rua, numero, bairro, area){
    const casa = new Casa(rua, numero, bairro, area);
    return casa;
}
function novoApartamento(rua, numero, bairro, area, numeroAp){
    const ap = new Apartamento(rua, numero, bairro, area, numeroAp);
    return ap;
}
function pegarRua(){
    const rua = document.querySelector("#rua").value;
    return rua;
}
function pegarNumero(){
    const numero = document.querySelector("#numero").value;
    return numero;
}
function pegarBairro(){
    const bairro = document.querySelector("#bairro").value;
    return bairro;
}
function pagarArea(){
    const area = document.querySelector("#area input").value;
    return area;
}
function estaAlugado(){
    const estaAlugado = document.querySelector("#alugado input:checked").value
    return estaAlugado;
}
function pagarNumeroApartamento(){
    const numeroApartamento = document.querySelector("#numero-ap input").value;
    return numeroApartamento;
}
function textoEstadoDeLocacao(){
    const p = document.createElement("p");
    if(estaAlugado() == "nao"){
        p.innerText = "NÃO ESTÁ ALUGADO";
    }else{
        p.innerText = "ALUGADO";
        p.style.backgroundColor = "red";
        p.style.color = "white";
    }
    return p;
}
function novoBotao(){
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remover";
    removeButton.type = "button";
    removeButton.setAttribute("onclick", "removerCasa(this)");
    return removeButton;
    
}
function removerCasa(botao){
    const remover = botao.parentNode;
    document.querySelector(".imoveis-cadastrados").removeChild(remover);
}
function mostrarCadastro(moradia){
    const moradiaCadastrada = document.createElement("div")
    const estadoDeUso = textoEstadoDeLocacao();
    const informacoes = textoCadastro(moradia);
    const botaoRemover = novoBotao();
    moradiaCadastrada.appendChild(estadoDeUso);
    moradiaCadastrada.appendChild(informacoes);
    moradiaCadastrada.appendChild(botaoRemover);
    document.querySelector(".imoveis-cadastrados").appendChild(moradiaCadastrada);
}
function textoCadastro(moradia){
    const area = moradia.getArea();
    const bairro = moradia.getBairro();
    const rua = moradia.getRua();
    const numero = moradia.getNumero();
    let informacoes = "Rua: " + rua + "\n" + "Número: " + numero + "\n" + "Bairro: " + bairro + "\n" + "Area: " + area + "\n";
    if(tipoMoradia() == "apartamento"){
        informacoes += "Numero apartamento: " + moradia.getNumeroAp() + "\n";
    }
    const p = document.createElement("p");
    p.innerText = informacoes;
    return p;
}
function cadastrar(){
    event.preventDefault();
    let moradia = null;
    const area = pagarArea();
    const bairro = pegarBairro();
    const rua = pegarRua();
    const numero = pegarNumero();
    if(tipoMoradia() == "apartamento"){
        const numeroApartamento = pagarNumeroApartamento();
        moradia = novoApartamento(rua, numero, bairro, area, numeroApartamento);
    }else{
        moradia = novaCasa(rua, numero, bairro, area);
    }
    mostrarCadastro(moradia);
    document.querySelector("form").reset();
    mostarNumeroAp();
    
}
function mostarNumeroAp(){
    const numeroAp = document.querySelector("#numero-ap");
    if(tipoMoradia() == "apartamento"){
        numeroAp.style.display = "block";
    }else{
        numeroAp.style.display = "none";
    }
}