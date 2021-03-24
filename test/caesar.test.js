const expect = require("chai").expect;
const caesar = require("../src/caesar");
describe("caesarModule.cesar", () => {
  it("If shift does not exist, return false", () => {
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("If shift is less than -25, return false", () => {
    const shift = -26;
    const actual = caesar("thinkful", shift);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("If shift is more than 25, return false", () => {
    const shift = 99;
    const actual = caesar("thinkful", shift);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("If shift is 0, return false", () => {
    const shift = 0;
    const actual = caesar("thinkful", shift);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Ensures string has proper spacing", () => {
    const input = "This is a secret message!";
    const actual = caesar(input, 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("Ensures input is not case sensitive", () => {
    const input = "BPQA qa I amkzmb umaaiom!";
    const actual = caesar(input, 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  it("Function properly encodes message without using encode input", () => {
    const input = "thinkful";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("Function properly decodes message without using encode input", () => {
    const input = "thinkful";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });
  it("Function properly encodes/decodes message", () => {
    const input = "wklqnixo";
    const shift = 3;
    const encode = false;
    const actual = caesar(input, shift, encode);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
});
