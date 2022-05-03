import { reverseString } from "./reverseString";

test("reverse single word", () => {
  expect(reverseString("Backward")).toMatch(/drawkcaB/);
});

test("reverse multiple words", () => {
  expect(reverseString("How about this?")).toMatch(/\?siht tuoba woH/);
});
