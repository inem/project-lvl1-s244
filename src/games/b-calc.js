import flow from '..';

const calculate = (expression) => {
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
};

const setupGame = () => {
  const a = flow.randomValue(10);
  const b = flow.randomValue(10);
  const sign = '+-*'[flow.randomValue(2)];

  const expression = `${a} ${sign} ${b}`;

  return [expression, calculate(expression)];
};

const play = () => flow.playGame(setupGame);

export default play;
