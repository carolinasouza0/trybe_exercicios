let clientesTrybeBank = ["Ada", "John", "Gus"];

function removeClientes(nome) {
  if (typeof nome !== "string" && !clientesTrybeBank.includes(nome)) {
    console.log("Erro. É preciso digitar um nome.");
  } else {
    clientesTrybeBank.splice(clientesTrybeBank.indexOf(nome), 1);
    console.log(clientesTrybeBank);
  }
}
removeClientes("Gus");
