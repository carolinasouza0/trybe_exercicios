let numbers = [2, 4, 6, 8, 70, 8, 100, 2, 30, 26];
let numerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares += 1;
  }
}
if (numerosImpares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(numerosImpares);
}
