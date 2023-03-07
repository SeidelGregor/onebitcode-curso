let usuario = {
    nome: "Gregor",
    idade: 25,
    maioridade:function(){
        if(this.idade >= 18){
            return true;
        }else{
            return false;
        }
    }
    /*se usar arrow function deve refenciar o metodo no lugar do this*/
}

let usuario2 = {
    nome: "Fabio",
    idade: 16,
    maioridade:()=>{
        if(usuario2.idade >= 18){
            return true;
        }else{
            return false;
        }
    }
    /*se usar de funcão anonima pode refenciar o com this a variavel idade*/
}

let {nome: nomeUsuario, idade: idadeUsuario} = usuario;//desestruturação de objetos
/*como maioridade é uma função o valor dela não pode ser passado para uma variavel usando desestruturação 
pois usando desse metodo estaria sendo passada a função como um todo*/
let maioridadeUsuario = usuario.maioridade();
console.log(nomeUsuario, idadeUsuario, maioridadeUsuario);

let {nome, idade} = usuario2;//se variaveis tiverem mesmo nome pode se omitir a declaração da mesma
let maioridadeUsuario2 = usuario2.maioridade();
console.log(nome, idade, maioridadeUsuario2);

let nomesDeUsuarios = [nomeUsuario, nome];
let [nome1, nome2] = nomesDeUsuarios;//desestruturação de vetores(arrays)
console.log(nome1, nome2);