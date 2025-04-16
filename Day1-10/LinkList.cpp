/***************************DSA day 1***************************/
/*******Question 1********/
//Write a function isEven(num) that returns true if the number is even, otherwise false.
function isEven(number) {
  return number % 2 === 0; //directly returning the boolean
}
console.log(isEven(2));
/*******Question 2********/
//Write a function findMax(arr) that takes an array of numbers and returns the maximum value.
//approach I used
function findMax1(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
//approach with time complexity O(n)
function findMax2(arr) {
  if (arr.length == 0) return "please enter an array";
  return Math.max(...arr); //unpack the array using spread operator
}
console.log(findMax2([1, 2, 7, 5, 8]));
/*******Question 3********/
//Write a loop to print all even numbers between 1 and 20.
for (let i = 2; i <= 20; i += 2) {
  //increasing i by 2 as we know every 2nd word is even like 0, 2, 4
  console.log(i);
}
