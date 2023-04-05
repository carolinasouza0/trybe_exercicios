const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPares = () => {
  return numbers.filter((number) => number % 2 === 0).reduce((acc, curr) => acc += curr);
}

console.log(somaPares());