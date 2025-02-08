/****************************Day 7*******************************/
/*****Question 01******/
//Write a function to find the maximum subarray sum (Kadane’s Algorithm) and analyze its time and space complexity.

function maxSubarraySum(arr) {
  let maxEnding = arr[0];
  let maxSoFar = arr[0];

  for (let i = 0; i < arr.length; i++) {
    maxEnding = Math.max(arr[i], arr[i] + maxEnding);
    maxSoFar = Math.max(maxEnding, maxSoFar);
  }
  return maxSoFar;
}
//The time complexity is O(n) (due to the loop and Math.max), and the space complexity is O(1).
// const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(num)); // Output: 6 (subarray [4, -1, 2, 1])

/*****Question 02******/
//Write a function to check if a string is a palindrome and analyze its time and space complexity.
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
//The time complexity is O(n) (due to the loop and join operation), and the space complexity is O(1).
console.log(isPalindrome("mehak")); // output: false
console.log(isPalindrome("level")); //output: true
