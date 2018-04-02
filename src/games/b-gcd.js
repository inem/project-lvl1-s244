import flow from '..';

const gcd = (a, b) => {
  const remainder = a % b;
  return (remainder === 0) ? b : gcd(b, remainder);
};

const setupGame = () => {
  const a = flow.randomValue(20) + 10;
  const b = flow.randomValue(50) + 10;

  const first = Math.max(a, b);
  const last = Math.min(a, b);

  const expression = `${a} ${b}`;

  return [expression, gcd(first, last)];
};

const play = () => flow.playGame(setupGame);

export default play;
