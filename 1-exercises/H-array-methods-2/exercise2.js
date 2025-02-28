/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

// function capitalise(str) {
//   let upperCase = str[0].toUpperCase();
//   let newStr = str.slice(1, str.length);
//   return upperCase + newStr;
// }
//💫💫💫💫💫💫💫💫💫
function capitalise(str) {
  return str
    .split("")
    .map((value, index) => (index === 0 ? value.toUpperCase() : value))
    .join("");
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
