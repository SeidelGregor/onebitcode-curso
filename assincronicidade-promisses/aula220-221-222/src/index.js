function aceleracao(velocidadeInicial, tempo, aceleracao) {
    new Promise(function (resolve, reject) {
        if (tempo > 0 && aceleracao > 0) {
            let segundos = 1;
            let v = 0;
            const setIntervalId = setInterval(() => {
                v = velocidadeInicial + aceleracao;
                if (segundos >= tempo) {
                    console.log(`Velociade final é ${v}m/s`); 
                    clearInterval(setIntervalId);
                    resolve();
                } else {
                    velocidadeInicial = v; 
                    segundos++; 
                }
            }, 1000);
               
        } else {
            reject("Manteve a velocidade");
        }
    });
}

aceleracao(0, 3.5, 9.8);
console.log("acelerando");