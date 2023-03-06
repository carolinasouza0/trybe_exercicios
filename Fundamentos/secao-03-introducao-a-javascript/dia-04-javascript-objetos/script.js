const arrayOfNumbers = (vector) => {
  let newArray = [];
  let newVector = vector.flat();
  for (let index = 0; index < newVector.length; index += 1) {
    if (newVector[index] % 2 === 0) {
      newArray.push(newVector[index]);
    }
  }
  return newArray.sort((a, b) => a - b);
};

let vector = [
  [20, 2],
  [3, 4, 5, 6],
  [7, 8, 16, 10],
];

console.log(arrayOfNumbers(vector));
