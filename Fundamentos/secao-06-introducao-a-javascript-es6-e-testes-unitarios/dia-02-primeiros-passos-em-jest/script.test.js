const myRemove = require('./script');

describe ('testa a função myRemove', () => {
  const array = [1, 2, 3, 4]

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });
})