import { validateInp } from './validation';

test('Validation Input Function Works', () => {
  expect(validateInp(5.6, '.')).toBeFalsy();

  expect(validateInp(5, '.')).toBeTruthy();

  expect(validateInp(null, '.')).toBeTruthy();

  expect(validateInp(5.6, '5')).toBeTruthy();
});