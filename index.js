function reverseWord(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord.toLowerCase();
}

function isPalindrome(word) {
  return word.toLowerCase() === reverseWord(word);
}
// console.log(isPalindrome("Racecar"));

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
