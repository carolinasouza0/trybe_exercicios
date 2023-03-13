const body = document.querySelector("body");
const backgroundWhite = document.querySelector("#white");
const backgroundBlack = document.querySelector("#black");
const backgroundGreen = document.querySelector("#green");
const backgroundBlue = document.querySelector("#blue");
const backgroundYellow = document.querySelector("#yellow");

backgroundWhite.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  localStorage.setItem("backgroundColor", "white");
});

backgroundBlack.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  localStorage.setItem("backgroundColor", "black");
});

backgroundGreen.addEventListener("click", () => {
  body.style.backgroundColor = "green";
  localStorage.setItem("backgroundColor", "green");
});
backgroundBlue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
  localStorage.setItem("backgroundColor", "blue");
});
backgroundYellow.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
  localStorage.setItem("backgroundColor", "yellow");
});

const meuLocalStorage = {
  setItem: (chave, valor) => localStorage.setItem(chave, JSON.stringify(valor)),
  getItem: (chave) => {
    const obtem = localStorage.getItem(chave);
    if (obtem) return JSON.parse(obtem);
    return null;
  },
};

window.onload = () => {
  body.style.backgroundColor = localStorage.getItem("backgroundColor");
};
