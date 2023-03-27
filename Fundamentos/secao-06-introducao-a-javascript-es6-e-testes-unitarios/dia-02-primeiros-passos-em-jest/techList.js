const techList = (array, string) => {
  const sortedArray = array.sort();
  const arrayDeObj = [];
  if (array.length === 0) {
    return `Vazio!`;
  } else {
    for (let index = 0; index < sortedArray.length; index += 1) {
      arrayDeObj.push({
        tech: sortedArray[index],
        name: string,
      });
    }
    return arrayDeObj;
  }
};

module.exports = techList;