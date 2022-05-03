import { caesarCipher } from "./caesarCipher";

test("check just letters", () => {
  expect(caesarCipher("test case one")).toMatch(/grfg pnfr bar/);
});

test("check for punctuation to be ignored", () => {
  expect(caesarCipher("test, case one.")).toMatch(/grfg, pnfr bar./);
});

test("keep the same case", () => {
  expect(caesarCipher("Test cAse one")).toMatch(/Grfg pNfr bar/);
});
