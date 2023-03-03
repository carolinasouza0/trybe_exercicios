const ligarDesligar = (status) => {
  status === "desligado" ? (status = "Engines On") : (status = "Engines Off");
  return status;
};

console.log(ligarDesligar("ligado"));
