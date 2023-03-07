function pegarDadosFormulário(){
    nomeCompleto();
    linguagemProgramacao();
}

function nomeCompleto(){
    let nomeCompleto = "";
    const pegarNomeCompleto = document.querySelectorAll(".nome-completo input");
    pegarNomeCompleto.forEach(nome_sobrenome =>{
        nomeCompleto += nome_sobrenome.value + " ";
    });
    return nomeCompleto;
}

function linguagemProgramacao(){
    const linguagemProgramacao = document.querySelector("select#linguagem option:checked").value;
    return linguagemProgramacao;
}