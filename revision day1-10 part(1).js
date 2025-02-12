/*******************Day 11 LeetCode(Revision Day)************************/
/******* Question 1********/
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function (nums) {
  let seen = new Set();
  for (let n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
};
/******* Question 2********/
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function (nums, target) {
  let n = nums.length;
  let map = {};
  for (let i = 0; i < n; i++) {
    let complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};
/******* Question 3********/
//Given an integer array nums, find the subarray with the largest sum, and return its sum.
var maxSubArray = function (nums) {
  let n = nums.length;
  let currentSum = 0,
    maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
};
