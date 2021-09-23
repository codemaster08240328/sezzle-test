import Calculator from './Calculator';

// 1 + 2 * 2 - 1 + 9 / 3 = 7
test('Calculator Object Works fine', () => {
  const calcManager = new Calculator();

  const expression = '1+2*2-1+9/3';

  expression.split('').forEach((item) => {
    if (isNaN(Number(item))) {
      calcManager.addOperator(item);
    } else {
      calcManager.addInput(item);
    }
  });

  expect(calcManager.inputs.length).toBe(6);
  expect(calcManager.operators.length).toBe(5);

  expect(calcManager.calculate()).toBe(7);
})