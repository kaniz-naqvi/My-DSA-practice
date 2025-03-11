/*******************Day 17************************/
/******* Question 2********/
//Solve the Valid Parentheses problem for the following inputs:
function isValid(s) {
  let stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (map[top] !== char) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid("({[]})")); // true
console.log(isValid("([)]")); // false
console.log(isValid("{{{{")); // false
