document.querySelector(".selecao-de-evento").addEventListener("change", ()=> {
    const cor = document.querySelector(".selecao-de-evento option:checked").value;
    const corpo = document.querySelector("body");
    corpo.style.backgroundColor = cor;    
});
