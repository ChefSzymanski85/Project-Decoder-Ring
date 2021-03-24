const substitutionModule = (function () {
  function isIsogram(str) {
    //test to see if a string is an isogram (no repeated characters)
    return !/(.).*\1/.test(str);
  }

  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length != 26 || isIsogram(alphabet) === false) return false;

    const abc = "abcdefghijklmnopqrstuvwxyz "; //create a standard alphabet and add a space to account for spaces
    const splitAbc = abc.split(""); //split each letter of abc into an array
    const alphabetPlusSpace = alphabet + " "; //convert inputted alphabet to allow spaces
    const splitAlphabet = alphabetPlusSpace.toLowerCase().split(""); //split each letter into an array and account for upper case letters
    const splitInput = input.toLowerCase().split("");

    if (encode === false) {
      const match = splitInput.map((char) => {
        //map each char in input
        const character = splitAlphabet.findIndex((letter) => letter === char); //find the index of each char in the input
        return splitAbc[character]; //replace it with the char in abc
      });
      const joined = match.join(); //convert match back into a string
      const replaced = joined.replace(/,/g, ""); //remove commas in between each char
      return replaced;
    }

    const match = splitInput.map((char) => {
      const character = splitAbc.findIndex((letter) => letter === char);
      return splitAlphabet[character]; //same as above but finding abc char and replacing it with alphabet char
    });
    const joined = match.join();
    const replaced = joined.replace(/,/g, "");
    return replaced;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
