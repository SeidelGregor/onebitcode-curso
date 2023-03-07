function mostrar(){
    //document.querySelector("#informacoes").innerText = criarTexto();
    console.log(pegarTecnologias());
}

/*function pegarNome(){//pegar o nome pelo id
    const nome = document.querySelector("#nome").value;
    return nome;
}

function pegarSobrenome(){//pegar o sobrenome pelo id
    const sobrenome = document.querySelector("#sobrenome").value;
    return sobrenome;
}*/

function pegarNomeCompleto(){//pegar nome e sobrenome pela classe depois concatenar
    const nome = document.querySelectorAll(".nomeCompleto")[0].value;
    const sobrenome = document.querySelectorAll(".nomeCompleto")[1].value;
    let nomeCompleto;
    if(nome =="" && sobrenome == ""){
        nomeCompleto = "Ninguém";
    }else{
        nomeCompleto = nome + " " + sobrenome;
    }
    return nomeCompleto;
}

function pegarEspecialidade(){//pegar a especialidade selicionada
    const especialidade = document.querySelector("input.especialidade:checked").value;
    return especialidade;
}

function pegarExperiencia(){//pegar a opção de experiencia selecionada
    const experiencia = document.querySelector("select.experiencia option:checked").value;
    return experiencia;
}

function pegarTecnologias(){//pegar as tecnologias selecionadas e concatenar
    const tecnologias = document.querySelectorAll("input.tecnologias:checked");
    /*if(tecnologias.length == 0){
        return "nada";
    }*/
    let tecnologiasConcatenado = "";
    tecnologias.forEach((linguagem, i) =>{//possibilidade 1
        if(tecnologias.length == 1 || i == tecnologias.length -1){
            tecnologiasConcatenado += linguagem.value;
        }else if(i == tecnologias.length -2){
            tecnologiasConcatenado += linguagem.value + " e ";
        }else{
            tecnologiasConcatenado += linguagem.value + ", ";
        }
    });
    /*for(i=0; i < tecnologias.length; i++){//possibilidade 2
        if(tecnologias.length == 1 || i == tecnologias.length -1){
            tecnologiasConcatenado += tecnologias[i].value;
        }else if(i == tecnologias.length -2){
            tecnologiasConcatenado += tecnologias[i].value + " e ";
        }else{
            tecnologiasConcatenado += tecnologias[i].value + ", ";
        }
    }*/
    return tecnologiasConcatenado;
}

function criarTexto(){//criar texto que vai aparecer para o usuario
    const texto = "Olá " + pegarNomeCompleto() + " vejo que você é um desenvolvedor " + pegarEspecialidade() + " com experiencia de " + pegarExperiencia() + " com conhecimento em " + pegarTecnologias();
    return texto;
}