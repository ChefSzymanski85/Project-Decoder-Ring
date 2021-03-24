const polybiusModule = (function () {
  function isEven(string) {
    return string.length % 2 === 0;
  } //helper function to see if a string has even numbers

  function polybius(input, encode = true) {
    const polyArr = [
      { char: "a", num: 11 },
      { char: "b", num: 21 },
      { char: "c", num: 31 },
      { char: "d", num: 41 },
      { char: "e", num: 51 },
      { char: "f", num: 12 },
      { char: "g", num: 22 },
      { char: "h", num: 32 },
      { char: "(i/j)", num: 42 },
      { char: "i", num: 42 },
      { char: "j", num: 42 },
      { char: "k", num: 52 },
      { char: "l", num: 13 },
      { char: "m", num: 23 },
      { char: "n", num: 33 },
      { char: "o", num: 43 },
      { char: "p", num: 53 },
      { char: "q", num: 14 },
      { char: "r", num: 24 },
      { char: "s", num: 34 },
      { char: "t", num: 44 },
      { char: "u", num: 54 },
      { char: "v", num: 15 },
      { char: "w", num: 25 },
      { char: "x", num: 35 },
      { char: "y", num: 45 },
      { char: "z", num: 55 },
      { char: " ", num: " " },
    ];

    if (encode === false) {
      if (isEven(input.replace(" ", "")) === false) return false;
      //use helper function to return false if # has odd # of digits, don't include spaces
      const splitByTwo = input.match(/ |.{2}/g); //splits input into array containing 2 chars each
      const output = splitByTwo.map((chars) => {
        const findChars = polyArr.find(
          (number) => number.num.toString() === chars
        ); //match the split input with the num value in polyArr
        const { char } = findChars;
        return char; //return the letter
      });
      return output.join(""); //join the letters back into a string
    }
    const splitInput = input.toLowerCase().split(""); //split input and ensure all letters are lowercase
    const output = splitInput.map((chars) => {
      const findChars = polyArr.find((letter) => letter.char === chars);
      const { num } = findChars;
      return num;
    }); //same as above but return num instead of char
    return output.join("");
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
