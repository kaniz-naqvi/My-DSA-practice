/*******************Day 22************************/
/******* Question 1********/
//Write a function to determine if a number is a happy number.
function sumSquare(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
function isHappy(num) {
  let fast = num,
    slow = num;
  do {
    slow = sumSquare(slow);
    fast = sumSquare(sumSquare(fast));
  } while (slow !== fast);
  return slow === 1;
}
console.log(isHappy(19)); // true
console.log(isHappy(8)); // false
/******* Question 2********/
//Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n], prove that at least one duplicate number exists, and return the duplicate number.
function findDuplicate(nums) {
  let slow = nums[0],
    fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 2])); // 2
