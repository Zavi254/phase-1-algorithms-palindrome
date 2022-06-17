function isPalindrome(word) {
  // Write your algorithm here
  const theWord = word.split('');
  const reversedWord = theWord.reverse().join('');
  return reversedWord === word;
}

isPalindrome('abba');
isPalindrome('ab');


/* 
  Add your pseudocode here
  - Make the string parameter an array by using split method
  - Reverse the array, and later join the array in a string
  - Compare the reversed string and the original string
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

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));


}

module.exports = isPalindrome;
