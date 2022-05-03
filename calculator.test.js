import { calculator } from "./calculator";

test("check addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("check subtraction", () => {
  expect(calculator.sub(2, 1)).toBe(1);
});

test("check multiplication", () => {
  expect(calculator.mul(2, 3)).toBe(6);
});

test("check division", () => {
  expect(calculator.div(10, 5)).toBe(2);
});
