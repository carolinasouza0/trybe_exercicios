let clientesTrybeBank = ["Ada", "John", "Gus"];

function adicionaClientes(nome) {
  if (typeof nome !== "string") {
    console.log("Erro. É preciso digitar um nome.");
  } else {
    clientesTrybeBank.push(nome);
    console.log(clientesTrybeBank);
  }
}
adicionaClientes("Victor");
