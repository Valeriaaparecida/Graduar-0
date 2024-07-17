const tabela = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanoParaInteiro(romano) {
    let total = 0;
    
    for (let i = 0; i < romano.length; i++) {                  
        let valorAtual = tabela[romano[i]];
        let valorProximo = tabela[romano[i + 1]];
        //verifica se o numero romano possui apenas um algarismo 
        if (valorProximo !== undefined && valorAtual < valorProximo) {
            total -= valorAtual;
        } else {
            total += valorAtual;
        }
    }

    return total;
}

console.log(romanoParaInteiro('IX'));
console.log(romanoParaInteiro('MCMXCIV'));
console.log(romanoParaInteiro('XM'));


