import { capitalize } from "./capitalize";

test("capitalizes first letter of word", () => {
  expect(capitalize("and")).toMatch(/And/);
});

test("ignores leading whitespace", () => {
  expect(capitalize(" and")).toMatch(/And/);
});

test("can handle more than one word", () => {
  expect(capitalize("and so I thought")).toMatch(/And so I thought/);
});
