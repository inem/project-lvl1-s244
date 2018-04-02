import flow from '..';

const even = number => number % 2 === 0;
const getCorrectAnswer = number => (even(number) ? 'yes' : 'no');

const setupGame = () => {
  const value = flow.randomValue();
  const correctAnswer = getCorrectAnswer(value);

  return [value, correctAnswer];
};

const play = () => flow.playGame(setupGame);

export default play;
