import flow from '..';

const even = number => number % 2 === 0;

const setupGame = () => {
  const value = flow.randomValue();
  const correctAnswer = flow.getCorrectAnswer(value, even);

  return [value, correctAnswer];
};

const cycleThrough = (value, correctAnswer) => {
  flow.askQuestion(value);
  const answer = flow.getAnswer();

  console.log(flow.explain(answer, correctAnswer));
  return (answer == correctAnswer);
};

const play = () => flow.playGame(setupGame, cycleThrough);

export default play;
