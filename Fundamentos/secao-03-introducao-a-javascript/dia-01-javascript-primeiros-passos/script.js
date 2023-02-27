let valorCusto = -1;
let valorVenda = 0;
let impostoSobreCusto = (20 * valorCusto) / 100;
let valorCustoTotal;
let lucro;

if (valorCusto >= 0 && valorVenda >= 0) {
  valorCustoTotal = valorCusto + impostoSobreCusto;
  lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log("o lucro total da empresa ao vender mil produtos é", lucro);
} else {
  console.log("Erro. Valores incorretos.");
}
