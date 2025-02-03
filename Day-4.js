/****************************Day 4*******************************/
/*****Question 01******/
//Write a function to find the first non-repeating character in a string, case-insensitive comparisons (e.g., treat 'A' and 'a' as the same character).
function firstNonRepeatingCharacter(str) {
  let lowerCaseStr = str.toLowerCase(); // treat 'A' and 'a' as the same character
  let frequency = lowerCaseStr.split("").reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {});
  for (let i = 0; i < str.length; i++) {
    if (frequency[lowerCaseStr[i]] === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepeatingCharacter("Ayli")); //A
console.log(firstNonRepeatingCharacter("Aylia")); //y
