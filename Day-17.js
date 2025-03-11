/*******************Day 17************************/
/******* Question 1********/
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
/******* Question 2********/
//Extend the Min Stack implementation to handle duplicate minimum values correctly.
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(value) {
    this.stack.push(value);
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }
  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }
  pop() {
    const poppedValue = this.stack.pop();
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  getMin() {
    if (this.stack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }
}
const minStack = new MinStack();
minStack.push(5);
minStack.push(8);
minStack.push(1);
minStack.push(1);
minStack.push(9);
console.log(minStack.top());
console.log(minStack.getMin());
