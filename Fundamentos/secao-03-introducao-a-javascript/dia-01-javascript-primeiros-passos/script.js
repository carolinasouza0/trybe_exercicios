let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 1556.93;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquotaIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIR = salarioBase * 0.225 - 636.13;
} else if (salarioBase > 4664.68) {
  aliquotaIR = salarioBase * 0.275 - 869.36;
}
console.log("Salário: ", salarioBase - aliquotaIR);
