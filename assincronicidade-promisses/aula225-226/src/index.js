const conta = {
    proprietario: "João",
    senha: "12345",
    cpf: "000.000.000-00",
    telefone: "(11)99999-9999",
    saldo: 2000.00
};

const codigoTransferencia = {
    recebimento: 1,
    envio: 2
}

function atualizarSaldo (valorTransferencia) {
    return new Promise((resolve, reject)=>{
        conta.saldo += valorTransferencia;
        if(conta.saldo < 0){
            reject(`${conta.proprietario} está devendo R$${conta.saldo * -1}`);
        }else{
            resolve(`${conta.proprietario} seu novo saldo é de R$${conta.saldo}`);
        }
    });
};

function transferencia(valor, tipo){
    return new Promise((resolve, reject)=>{
        if(Object.values(codigoTransferencia).includes(tipo)){
            tipo == 1 ? resolve(valor * -1) : resolve(valor);          
        }else{
            reject("Código de transferencia invalido");
        }
    });
}

function loginConta(senha, cpf){
    //se uma das duas promisses for rejeitada ambas são rejeitadas
    Promise.all([verificarCpf(cpf),verificarSenha(senha)]).then(() =>{
        console.log("Acesso autorizado");
    }).catch(()=>{
        console.log("Acesso negado");
    });
}

function verificarCpf(cpf){
    return new Promise((resolve, reject) => {
        cpf == conta.cpf ? resolve() : reject();
    });
}

function verificarSenha(senha){
    return new Promise((resolve, reject) => {
        senha == conta.senha ? resolve() : reject();
    })
}

loginConta("12345", "000.000.000-10");

transferencia(2.3, codigoTransferencia.recebimento).then(valor =>{
    return atualizarSaldo(valor);//como o retorno é uma promise pode se encadiar outro then economizando código
}).then(mensagem =>{
    console.log(mensagem);
}).catch(erro => {
    console.log(erro);
})

