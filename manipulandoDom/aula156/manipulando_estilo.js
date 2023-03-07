function colocarCorDeFundo(){
    const corDeFundo = document.querySelector(".texto-estilizado");
    corDeFundo.style.backgroundColor = "blue";
}

function removerCorDeFundo(){
    const corDeFundo = document.querySelector(".texto-estilizado");
    corDeFundo.style.backgroundColor = "white";
}

function colocarCorDaFonte(){
    const corDaFonte = document.querySelector(".texto-estilizado");
    corDaFonte.style.color = "red";
}

function removerCorDaFonte(){
    const corDaFonte = document.querySelector(".texto-estilizado");
    corDaFonte.style.color = "black";
}

function mouseAqui(){
    const estilo = document.querySelector(".texto-estilizado");
    estilo.style.backgroundColor = "black";
    estilo.style.color = "white";
}

function mouseSaiu(){
    const estilo = document.querySelector(".texto-estilizado");
    estilo.style.backgroundColor = "white";
    estilo.style.color = "black";
}