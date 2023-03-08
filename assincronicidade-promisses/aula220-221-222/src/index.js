function aceleracao(velocidadeInicial, tempo, aceleracao) {
    return new Promise(function (resolve, reject) {
        if (tempo > 0 && aceleracao > 0) {
            let segundos = 0;
            let velocidadeAtual = velocidadeInicial;
            const intervalId = setInterval(() => {
                velocidadeAtual += aceleracao;
                segundos++;
                if (segundos >= tempo) {
                    clearInterval(intervalId);
                    resolve(`Velociade final é ${velocidadeAtual.toFixed(2)}m/s`);
                }
            }, 1000);
               
        } else {
            const erro = {
                mensagem:"Não ouve aceleração",
                codigo: 1 //código para quando não ouver aceleração
            };
            reject(erro);
        }
    });
}

aceleracao(0, 0, 9.8).then(velocidadeFinal => {
    console.log(velocidadeFinal);
}).catch(erro => {
    console.error(`Erro: ${erro.mensagem}. Código: ${erro.codigo}`)
});
