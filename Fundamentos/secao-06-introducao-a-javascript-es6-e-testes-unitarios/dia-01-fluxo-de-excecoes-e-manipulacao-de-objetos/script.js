const studentRegister = (name, age) => {
  try {
    if (!name || !age) {
      throw new Error('Todas as informações são necessárias');
    }
    if (typeof name === 'string' && age < 18) {
      throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
    if (typeof name === 'string' && age >= 18) {
      return `${name}, seja bem-vindo(a) à AuTrybe!`
    }
  } catch (error) {
    return error.message;
  }
}

console.log(studentRegister(15));