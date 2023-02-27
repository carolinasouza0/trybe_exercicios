let numero1 = 20;
let numero2 = 0;
let numero3 = 12;

if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1, "é o maior número");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2, "é o maior número");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(numero3, "é o maior número");
} else {
  console.log("Os números são iguais");
}
