import OpertationManager, { Operator } from "./Operation";
import { ALLOWED_OPERATORS } from './config';

test('Operation Strategy Works fine', () => {
  const opM = new OpertationManager();

  const a = 1;
  const b = 1;

  ALLOWED_OPERATORS.forEach(op => {
    opM.addOperator(new Operator(op.name, op.handler));
  });

  ALLOWED_OPERATORS.forEach(op => {
    expect(opM.getOperator(op.name).doOperate(a, b)).toBe(op.handler(a, b));
  });
});