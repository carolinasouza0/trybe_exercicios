const pai = document.getElementById("pai");
const secondChild = document.getElementById("elementoOndeVoceEsta");
const primeiroFilhoDoElemento = secondChild.firstElementChild;

// Crie um irmão para elementoOndeVoceEsta.

const irmaoDeElemento = document.createElement("section");
irmaoDeElemento.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoDeElemento);

// Crie um filho para elementoOndeVoceEsta.

const filhoDoElemento = document.createElement("section");
filhoDoElemento.id = "filhoDoElementoOndeVoceEsta";
secondChild.appendChild(filhoDoElemento);

// Crie um filho para primeiroFilhoDoFilho.

const filhoDoFilhoDoElemento = document.createElement("section");
filhoDoFilhoDoElemento.id = "filhoDoFilhoDoElementoOndeVoceEsta";
primeiroFilhoDoElemento.appendChild(filhoDoFilhoDoElemento);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho =
  filhoDoFilhoDoElemento.parentElement.parentElement.nextElementSibling;
