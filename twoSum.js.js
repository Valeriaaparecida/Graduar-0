const nums = [1, 2, 3,1,2];
const target = 3;

// Variáveis para armazenar os índices dos números que somam ao target
let indice1 = null;
let indice2 = null;

// Percorrendo a lista nums para encontrar os dois números
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            indice1 = i;
            indice2 = j;
            break; // Encontramos os índices, podemos parar o loop interno
        }
    }
    if (indice1 !== null && indice2 !== null) {
        break; // Encontramos os índices, podemos parar o loop externo
    }
}

// Verificando se encontramos os índices válidos e exibindo o resultado
if (indice1 !== null && indice2 !== -null) {
    console.log([indice1, indice2]);
} else {
    console.log("Não foram encontrados dois números que somem ao target.");
}
