import readlineSync from 'readline-sync';

const warmWelcome = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

const correctAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const explanation = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) { return 'Correct!'; }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
}

export function askQuestion(maxValue = 20) {
  const r = Math.floor((Math.random() * maxValue) + 1);
  console.log(`Question: ${r}`);
  const userAnswer = readlineSync.question('Answer: ');

  console.log(explanation(userAnswer, correctAnswer(r)));
};

export default warmWelcome;