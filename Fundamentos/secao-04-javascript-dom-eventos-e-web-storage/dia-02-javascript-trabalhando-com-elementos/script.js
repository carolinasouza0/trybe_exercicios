const elementH1 = document.createElement("h1");
elementH1.innerText = "TrybeTrip - Agência de Viagens";
document.body.appendChild(elementH1);

const elementMain = document.createElement("main");
elementMain.className = "main-content";
document.body.appendChild(elementMain);

const elementSectionFirstSon = document.createElement("section");
elementSectionFirstSon.className = "center-content";
elementMain.appendChild(elementSectionFirstSon);

const elementPSectionSon = document.createElement("p");
const elementP = document
  .querySelector(".center-content")
  .appendChild(elementPSectionSon);
elementP.innerText =
  "Welcome to our travel agency. Together we can get a really good discount in your dream vacation!";

const elementSectionSecondSon = document.createElement("section");
elementSectionSecondSon.className = "left-content";
elementMain.appendChild(elementSectionSecondSon);

const elementSectionThirdSon = document.createElement("section");
elementSectionThirdSon.className = "right-content";
elementMain.appendChild(elementSectionThirdSon);

const imgSectionSecondSon = document.createElement("img");
imgSectionSecondSon.className = "small-image";
imgSectionSecondSon.src = "https://picsum.photos/200";
elementSectionSecondSon.appendChild(imgSectionSecondSon);

const listSectionThirdSon = document.createElement("ul");
elementSectionThirdSon.appendChild(listSectionThirdSon);
const array = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];

for (let index in array) {
  const liList = document.createElement("li");
  liList.innerText = array[index];
  listSectionThirdSon.appendChild(liList);
}

for (let index = 1; index <= 3; index += 1) {
  const h3MainSons = document.createElement("h3");
  h3MainSons.innerHTML = "criação das h3 filhas da main";
  elementMain.appendChild(h3MainSons);
  h3MainSons.className = "description";
}

elementH1.className = "title";
elementMain.removeChild(elementSectionSecondSon);
elementSectionThirdSon.style.cssText = "margin-right: auto";
elementMain.style.backgroundColor = "purple";

listSectionThirdSon.lastChild.remove();
listSectionThirdSon.lastChild.remove();
