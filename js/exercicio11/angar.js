const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]


/*primeiro filtra qual elemento atende a função depois retorna em uma variavel com map*/
let maisQue9 = hitchedSpaceships.filter(nave => {
    return nave[1] > 9
}).map(nave => {
    return nave[0]
})

/* retorna a posição que atende a função */
let desengatado = hitchedSpaceships.findIndex(nave => {
    return nave[2] == false
}) + 1

/* retorna a string maiulcula */
let maiuscula = hitchedSpaceships.map(nave => {
    return nave[0].toUpperCase()
})


let mensagem = 'naves com mais de 9 passageiros: ' + maisQue9 +'\n'
mensagem += 'plataforma ' + desengatado + ' nao foi engatado ainda\n'
mensagem += maiuscula

console.log(mensagem)