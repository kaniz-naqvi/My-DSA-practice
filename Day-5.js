/****************************Day 5*******************************/
/*****Question 01******/
//Write a recursive function to calculate the sum of all numbers from 1 to n.

function sum(n) {
  //Base Case
  if (n === 0) return 0;
  // Recursive case
  return n + sum(n - 1);
}
console.log(sum(5)); //output: 15
//
//
/*****Question 02******/
//Write a recursive function to reverse a string.

function reverseString(str) {
  if (str === "") return str; // Base case
  return reverseString(str.slice(1)) + str[0]; // Move first char to the end
}

console.log(reverseString("hello")); // "olleh"
