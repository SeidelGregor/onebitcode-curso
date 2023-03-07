function mudarEstado(){
    const estado = document.querySelector("#estado input:checked").value;
    const campoImput = document.querySelector("#visivel");
    const campoTexto = document.querySelector("#mostrar");
    
    if(estado == "habilitado"){
        campoImput.style.display = "block";
        campoTexto.style.display = "none";
    } else{
        campoImput.style.display = "none";
        campoTexto.style.display = "block";
    }
}