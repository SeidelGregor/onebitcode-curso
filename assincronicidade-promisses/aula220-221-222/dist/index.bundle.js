new Promise((function(o,c){c({mensagem:"Não ouve aceleração",codigo:1})})).then((function(o){console.log(o)})).catch((function(o){console.error("Erro: ".concat(o.mensagem,". Código: ").concat(o.codigo))}));