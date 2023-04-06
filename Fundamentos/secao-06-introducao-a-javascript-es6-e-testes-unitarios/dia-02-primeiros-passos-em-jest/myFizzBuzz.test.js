const myFizzBuzz = require('./myFizzBuzz');

describe ('testa a função myFizzBuzz', () => {
  it('Testa se a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(345)).toBe("fizzbuzz");
  });

  it('Testa se a função myFizzBuzz(num), sendo num um número divisível apenas por 3, retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });

  it ('Testa se a função myFizzBuzz(num), sendo num um número divisível apenas divisível por 5, retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  it ('Testa se a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, retorna o próprio número', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it ('Testa se a função myFizzBuzz(num), sendo num um parâmetro que não é um número, retorna false', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});