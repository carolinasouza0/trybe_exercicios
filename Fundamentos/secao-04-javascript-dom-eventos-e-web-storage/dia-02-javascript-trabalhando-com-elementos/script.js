let pai = document.getElementById("elementoOndeVoceEsta");
pai.parentNode.style.color = "green";

pai.firstElementChild.innerHTML = "Hi I'm the first child";

paiDoPai = document.getElementById("pai");

// Acesse o primeiroFilho a partir de pai.
paiDoPai.firstElementChild;

// Acesse o primeiroFilho a partir de elementoOndeVoceEsta.
pai.previousElementSibling;

// Acesse o texto Atenção! a partir de elementoOndeVoceEsta.
pai.nextSibling;

// Acesse o terceiroFilho a partir de elementoOndeVoceEsta.
pai.nextElementSibling;

// Acesse o terceiroFilho a partir de pai.
paiDoPai.lastElementChild.previousElementSibling;
