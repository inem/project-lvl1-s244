#!/usr/bin/env node
import warmWelcome, { askForName, askQuestion, randomValue, getAnswer, correctAnswer, verdict, explanation } from '..';

console.log('Welcome to the Brain Games!');
const name = askForName();
warmWelcome(name);

const cycle = () => {
  const value = randomValue();
  askQuestion(value);
  const answer = getAnswer();
  const result = verdict(answer, correctAnswer(value));

  console.log(explanation(answer, correctAnswer(value)));
  return result;
};

var flawlessVictory = true;

[1, 2, 3].forEach(function(i) {
  flawlessVictory = cycle();
});

if (flawlessVictory)
  warmWelcome('Congratulations', name);
