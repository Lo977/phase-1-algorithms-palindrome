function isPalindrome(word) {
  let words = word.toLowerCase();
  let reversed = [...words].reverse().join("");
  return words === reversed;
}
console.log(isPalindrome("Racecar"));

/* 
  - the strings into lowecase.
  -grab each charectors  of strings into an Array, reverse ,join and assign it to new variable.
  - chech if the word and new variable are the same

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
