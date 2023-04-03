
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (rightAnswers, studentAnswers, callback) => {
  let points = 0;
  for (let index in rightAnswers) {
    const returned = callback(rightAnswers[index], studentAnswers[index]);
    points += returned;
  }
  return `Resultado final: ${points} pontos`;
}

const checkAnswers = (rightAnswer, answer) => {
    if (answer === rightAnswer) {
      return 1;
    } else if (answer === 'N.A') {
      return 0;
    }
    return -0.5;
}

console.log(corrector(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
