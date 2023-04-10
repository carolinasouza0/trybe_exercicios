const myList = [5, 2, 3];

// escreva swap abaixo
const swap = (array) => {
  return [array[0], array[1], array[2]] = [array[2], array[1], array[0]];
};

console.log(swap(myList));