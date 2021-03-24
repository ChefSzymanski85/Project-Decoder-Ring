const expect = require("chai").expect;
const substitution = require("../src/substitution");
describe("substitutionModule.substitution", () => {
  it("Should return false if the substitution alphabet is missing", () => {
    const input = "thinkful";
    const actual = substitution(input);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Function properly encodes message", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet);
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("Function properly decodes message", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = false;
    const actual = substitution(input, alphabet, encode);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("Includes special characters in the input and/or alphabet", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const encode = false;
    const actual = substitution(input, alphabet, encode);
    const expected = "message";
    expect(actual).to.equal(expected);
  });
  it("Ensures that capital letters are ignored", () => {
    const input = "Youareanexcellentspy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet);
    const expected = "elpxhmxfmbymwwmfjdne";
    expect(actual).to.equal(expected);
  });
  it("Ensures that spaces are maintained throughout", () => {
    const input = "you are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet);
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("Ensures that alphabet is 26 characters exactly", () => {
    const input = "thinkful";
    const alphabet = "short";
    const actual = substitution(input, alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Ensures that all of the letters in alphabet are unique", () => {
    const input = "thinkful";
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const actual = substitution(input, alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
