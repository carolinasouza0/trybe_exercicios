const { encode, decode } = require('./script');

describe ('Testa as funções encode e decode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Testa a função encode, se as vogais a, e, i, o, u, são convertidos nos números 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ana')).toBe('1n1');
    expect(encode('ele')).toBe('2l2');
    expect(encode('tripa')).toBe('tr3p1');
    expect(encode('ovo')).toBe('4v4');
    expect(encode('mudo')).toBe('m5d4');
  });

  it('Testa a função decode, se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1n1')).toBe('ana');
    expect(decode('2l2')).toBe('ele');
    expect(decode('tr3p1')).toBe('tripa');
    expect(decode('4v4')).toBe('ovo');
    expect(decode('m5d4')).toBe('mudo');
  });

  it('Testa se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('n')).toBe('n');
    expect(decode('8')).toBe('8');
  });

  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('carol').length).toEqual(5);
    expect(decode('carol').length).toEqual(5);
  })
});