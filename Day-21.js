/*******************Day 20************************/
/******* Question 1********/
//Solve the Maximum Sum Subarray problem for the following inputs:
function maxSumSubarray(arr, k) {
  let maxSum = 0,
    windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); //9
console.log(maxSumSubarray([1, 9, -1, -2, 7, 3, -1, 2], 4)); //13
/******* Question 2********/
//Solve the Longest Substring Without Repeating Characters problem for the following inputs:
function lengthOfLongestSubstring(str) {
  let left = 0,
    maxLength = 0;
  const charSet = new Set();
  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring("abba")); // Output: 2
console.log(lengthOfLongestSubstring("abcdefg")); //7
