#!/usr/bin/env node
import warmWelcome, { askForName, askQuestion, randomValue, getAnswer, correctAnswer, verdict, explanation } from '..';

console.log('Welcome to the Brain Games!');
const name = askForName();
warmWelcome(name);

const even = number => number % 2 === 0;

const cycle = () => {
  const value = randomValue();
  askQuestion(value);
  const answer = getAnswer();
  const correctOne = correctAnswer(value, even);

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
