const expect = require("chai").expect;
const polybius = require("../src/polybius");
describe("polybiusModule.polybius", () => {
  it("Ensures that the ouput is a string", () => {
    const input = "thinkful";
    const actual = polybius(input);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  it("Function properly decodes message", () => {
    const input = "32511313432543241341";
    const encode = false;
    const actual = polybius(input, encode);
    const expected = "helloworld";
    expect(actual).to.equal(expected);
  });
  it("When decoding, if outputted number of characters is odd, return false", () => {
    const input = "44324233521254134";
    const encode = false;
    const actual = polybius(input, encode);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Ensures that capital letters are ignored", () => {
    const input = "HelloWorld";
    const actual = polybius(input);
    const expected = "32511313432543241341";
    expect(actual).to.equal(expected);
  });
  it("When encoding, spaces are maintained throughout", () => {
    const input = "hello world";
    const actual = polybius(input);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
  it("When decoding, spaces are maintained throughout", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
  it("Ensures that letters i and j both return 42", () => {
    const input = "ij";
    const actual = polybius(input);
    const expected = "4242";
    expect(actual).to.equal(expected);
  });
  it("When decoding 42, both i and j are returned", () => {
    const input = "4432423352125413";
    const encode = false;
    const actual = polybius(input, encode);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  });
});
