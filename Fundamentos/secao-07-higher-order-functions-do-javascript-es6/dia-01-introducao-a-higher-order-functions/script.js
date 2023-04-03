const lotery = (number, callback) => {
  let randomNumber = Math.floor(Math.random() * 5);
  return callback(number, randomNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
}


const checkNumber = (number, random) => {
  return number === random ? true : false;
  }

  console.log(lotery(2,checkNumber));