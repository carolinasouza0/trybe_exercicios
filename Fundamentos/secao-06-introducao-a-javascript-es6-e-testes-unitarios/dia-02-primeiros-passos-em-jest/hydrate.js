const hydrate = (string) => {
  const splitString = string.split(' ');
  let sumGlasses = 0;
  for (let index = 0; index < splitString.length; index += 1) {
    const numbers = parseInt(splitString[index]);
    if (numbers) {
      sumGlasses += numbers;
    }
  }
  return `${sumGlasses} copo${sumGlasses > 1 ? 's' : ''} de água`;
};

module.exports = hydrate;