#!/usr/bin/env node
import warmWelcome, { askForName, askQuestion, randomValue, getAnswer, correctAnswer, verdict, explanation } from '..';

console.log('Welcome to the Brain Games!');
const name = askForName();
warmWelcome(name);

const calculator = (expression) => {
  const [a, sign, b] = expression.split(' ');

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log(`Unknown sign "${sign}" in expression "${expression}" `);
      return NaN;
  }
}

const cycle = () => {
  const a = randomValue(10);
  const b = randomValue(10);
  const sign = '+-*'[randomValue(2)];

  const expression = `${a} ${sign} ${b}`;

  askQuestion(expression);
  const answer = getAnswer();
  const correctOne = calculator(expression);

  console.log(explanation(answer, correctOne));
  return verdict(answer, correctOne);
};

let flawlessVictory = true;

[1, 2, 3].forEach(() => {
  const result = cycle();
  flawlessVictory = flawlessVictory && result;
});

if (flawlessVictory) {
  warmWelcome('Congratulations', name);
}
