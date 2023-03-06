const romanAlgarism = (string) => {
  const splitAlgarism = string.split("");

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const number = splitAlgarism.map((numeral) => roman[numeral]);

  return number.reduceRight((ac, current, index, array) => {
    return current < array[index + 1] ? ac - current : ac + current;
  });
};

console.log(romanAlgarism("MMXVIII"));
