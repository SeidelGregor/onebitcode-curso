const changeEvent = new Event("change");
const nome = document.querySelector("#nome");
nome.addEventListener("change", chamarAlert);
document.querySelector("button").addEventListener("click",()=>{
    nome.dispatchEvent(changeEvent);
    nome.removeEventListener("change", chamarAlert);
    console.log("evento removido");
});
