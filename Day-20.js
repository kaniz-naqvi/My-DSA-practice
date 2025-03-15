/*******************Day 20************************/
/******* Question 1********/
//Solve the Two Sum problem for the following inputs:
function towSum(nums, target) {
  let left = 0,
    right = nums.length - 1;
  let sum;
  while (left < right) {
    sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum === target) {
      return [left + 1, right + 1];
    } else {
      right--;
    }
  }
  return [];
}
console.log(towSum([1, 2, 3, 4, 5], 8)); //[ 3, 5 ]
console.log(towSum([-3, -2, -1, 0, 1], -2)); //[ 1, 5 ]
/******* Question 2********/
//Solve the Remove Duplicates problem for the following inputs:
function removeDuplicates(arr) {
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1;
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); //3
console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5
