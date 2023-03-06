let basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
];

let iquals = 1;
let newObject = {};
let fruit = "";
for (let index = 0; index < basket.length; index += 1) {
  if (basket.indexOf(basket[index]) !== index) {
    fruit = basket[index];
    iquals += 1;
    newObject[fruit] = iquals;
  } else {
    newObject[basket[index]] = 1;
  }
}

let summaries = [];

for (let index in newObject) {
  let message = `${newObject[index]} ${index}`;
  if (newObject[index] > 1) {
    message += "s";
  }
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(", ")}.`);
