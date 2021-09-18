const listadePecas = ['Peça de Teste', 'AB', 'Peca B']

console.log ('quantidade de peças')

if (listadePecas.length <= 10) {
    console.log('as peças podem ser cadastradas');
}

console.log ('nome da peça')

for(let i = 0; i <listadePecas.length; i++) {
    const pecaAtual = listadePecas[i]
    if (pecaAtual.length < 3) {
     console.log (pecaAtual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
     console.log(pecaAtual + ':a peça pode ser cadastrada.')
    }
}

console.log('peso da peça')

const pesoDaPecaEmGramas = 50;

if (pesoDaPecaEmGramas >= 100) {
    console.log ('peso da peça suficiente')
} else { 
    console.log('valor insuficiente')
} 