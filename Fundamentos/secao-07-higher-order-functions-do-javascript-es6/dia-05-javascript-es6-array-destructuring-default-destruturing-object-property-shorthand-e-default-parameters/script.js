const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([car, brand, year]) => ({ car, brand, year });

console.log(toObject(['Palio', 'Fiat', 2019]));