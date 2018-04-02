import readlineSync from 'readline-sync';

const warmWelcome = (name, hello = 'Hello') => {
  console.log(`${hello}, ${name}!`);
};

const askForName = () => readlineSync.question('May I have your name? ');
const randomValue = (maxValue = 20) => Math.floor((Math.random() * maxValue) + 1);
const askQuestion = question => console.log(`Question: ${question}`);
const getAnswer = (prefix = 'Answer') => readlineSync.question(`${prefix}: `);

const explain = (userAnswer, _correctAnswer) => {
  if (userAnswer == _correctAnswer) { return 'Correct!'; }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${_correctAnswer}'.`;
};

const cycleThrough = (expression, correctAnswer) => {
  askQuestion(expression);
  const answer = getAnswer();

  console.log(explain(answer, correctAnswer));
  return (answer == correctAnswer);
};

const playGame = (setupGameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = askForName();
  warmWelcome(name);

  let flawlessVictory = true;

  [1, 2, 3].forEach(() => {
    const [value, correctAnswer] = setupGameFunc();
    const result = cycleThrough(value, correctAnswer);
    flawlessVictory = flawlessVictory && result;
  });

  if (flawlessVictory) {
    warmWelcome('Congratulations', name);
  }
};

export default { playGame, randomValue };
