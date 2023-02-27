let chess = "Rook".toLowerCase();

switch (chess) {
  case "pawn":
    console.log("move forward");
    break;
  case "bishop":
    console.log("move diagonally");
    break;
  case "knight":
    console.log("move horizontally and vertically");
    break;
  case "rook":
    console.log("as many squares as it likes horizontally and vertically");
    break;
  case "queen":
    console.log("as many squares as it likes horizontally and vertically");
    break;
  case "king":
    console.log("one square in any direction");
    break;
  default:
    console.log("Error. Invalid piece.");
}
