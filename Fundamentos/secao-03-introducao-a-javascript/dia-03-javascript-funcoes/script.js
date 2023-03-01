let saldo = 200;

function adicionaSaldo(valor) {
  return valor + saldo;
}

function subtraiSaldo(valor) {
  return saldo - valor;
}

function multiplicaSaldo(valor) {
  return valor * saldo;
}

function divideSaldo(valor) {
  return valor / saldo;
}

console.log(adicionaSaldo(500));
console.log(subtraiSaldo(50));
console.log(multiplicaSaldo(5));
console.log(divideSaldo(50));
