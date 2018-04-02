import readlineSync from 'readline-sync';
// import pry from 'pryjs';

const warmWelcome = (hello = 'Hello', name) => {
  console.log(`${hello}, ${name}!`);
};

const even = number => number % 2 === 0;

export function askForName() {
  return readlineSync.question('May I have your name? ');
}

export function correctAnswer(number) {
  return (even(number) ? 'yes' : 'no');
}

export function verdict(userAnswer, _correctAnswer) {
  return (userAnswer === _correctAnswer);
}

export function explanation(userAnswer, _correctAnswer) {
  if (userAnswer === _correctAnswer) { return 'Correct!'; }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${_correctAnswer}'.`;
}

export function randomValue(maxValue = 20) {
  return Math.floor((Math.random() * maxValue) + 1);
}

export function askQuestion(question) {
  console.log(`Question: ${question}`);
}

export function getAnswer(prefix = 'Answer') {
  return readlineSync.question(`${prefix}: `);
}

export default warmWelcome;
