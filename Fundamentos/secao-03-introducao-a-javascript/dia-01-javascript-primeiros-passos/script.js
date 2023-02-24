// Nesse exemplo, o "switch/case" deverá imprimir no terminal a classificação dos filmes que podem ser assistidos
// de acordo com a faixa etária das pessoas.

let faixaEtaria = "adulto";

switch (faixaEtaria) {
  case "adolescente":
    // Caso a variável seja "adolescente", será aplicada a lógica abaixo.

    console.log("Consulte a classificação do filme");
    // Se a pessoa for adolescente, essa será a mensagem impressa no console.

    break;

  // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido.
  case "adulto":
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora, faça a lógica do que deve ocorrer se a pessoa for adulta.

    console.log(
      "A pessoa adulta é classificada para assistir a qualquer filme"
    );
    //Caso a variável seja "adulto", essa mensagem deverá aparecer no terminal.

    break;
  // Interrompe-se o fluxo novamente caso a pessoa seja adulta.
  case "idoso":
    // Repete-se o mesmo processo para o case "idoso".
    console.log("A pessoa idosa é classificada para assistir a qualquer filme");
    break;
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases.
    // Ou seja, se a pessoa for criança, recém-nascida ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log("Só pode assistir a filmes livres");
  // Note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não é necessário interromper o funcionamento do mesmo.
}
