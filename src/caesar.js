const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //return false if any of the following are true
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1; // turning shift into opposite value if encode === false
    let output = "";
    const lowerCase = input.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      if (shift < 0) {
        return caesar(lowerCase, shift + 26); //causes input to wrap back to a after it hits z
      }
      let char = lowerCase[i];
      if (char.match(/[a-z]/i)) {
        //check to see if char is a letter
        let unicode = lowerCase.charCodeAt(i); //convert letter to unicode
        if (unicode >= 97 && unicode <= 122) {
          char = String.fromCharCode(((unicode - 97 + shift) % 26) + 97);
        }
      } //setting 'a' to 0, limit it to a-z, add number back to return code
      output += char;
    }
    return output;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
