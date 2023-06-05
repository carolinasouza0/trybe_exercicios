let clientesTrybeBank = ["Ada", "John", "Gus"];

function verificaTipoCliente(cliente) {
  if (typeof cliente !== "string") {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function verificaCliente(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = verificaTipoCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }
  let index = verificaCliente(cliente);
  if (index === false) {
    return "Cliente não encontrada (o)";
  }
  clientesTrybeBank.splice(index, 1);
  return "Cliente excluida(o) com sucesso.";
}

console.log(removeCliente(25));
