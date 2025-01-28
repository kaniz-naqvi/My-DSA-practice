/***************************DSA Day 2***************************/
/*******Question 1********/
// Remove duplicates from an array.
function removeDuplicates(arr) {
  let uniqueArr = []; // To store unique elements.
  let seen = {}; // To track seen elements.
  // Loop through the array.
  for (let num of arr) {
    // If the element has not been seen before, add it to uniqueArr and mark as seen.
    if (!seen[num]) {
      uniqueArr.push(num);
      seen[num] = true; // Mark the element as seen.
    }
  }
  return uniqueArr; // Return the array with unique elements.
}
console.log(removeDuplicates([1, 2, 2, 3, 6, 7, 8, 7, 9]));
// Output: [1, 2, 3, 6, 7, 8, 9]

// Approach 2: Shorter version using Set() for uniqueness.
function removeDuplicates(arr) {
  return [...new Set(arr)]; // Convert the Set back to an array.
}
console.log(removeDuplicates([1, 2, 2, 3, 6, 7, 8, 7, 9])); // Output: [1, 2, 3, 6, 7, 8, 9]

/*******Question 2********/
// Reverse a string without using the reverse() method.
function reverseString(str) {
  let left = 0,
    right = str.length - 1;
  let arr = str.split(""); // Convert the string to an array to manipulate characters.
  let temporaryStr;
  // Swap characters from both ends of the array until they meet.
  while (left < right) {
    temporaryStr = arr[left];
    arr[left] = arr[right];
    arr[right] = temporaryStr;
    left++;
    right--;
  }
  return arr.join(""); // Convert the array back to a string and return the reversed string.
}
console.log(reverseString("mehak"));
// Output: "kahem"

// Shorter approach: Reverse string using a for loop.
function reverseString(str) {
  let reversed = "";
  // Iterate from the end of the string and build the reversed string.
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed; // Return the reversed string.
}
console.log(reverseString("mehak")); // Output: "kahem"

/*******Question 3********/
// Write a function to find the second-largest number in an array.
// Approach 1: Using Math.max() to find the largest and second-largest.
function findSecondLargestNumber1(arr) {
  let largestNumber = Math.max(...arr); // Find the largest number.
  let secondLargestNumber = Math.max(
    ...arr.filter((num) => num < largestNumber) // Filter out the largest value and find the next largest.
  );
  return secondLargestNumber; // Return the second-largest number.
}
console.log(findSecondLargestNumber1([1, 2, 3, 4, 5, 6])); // Output: 5

// Approach 2: O(n) time complexity solution.
function findSecondLargestNumber2(arr) {
  let largestNumber = -Infinity; // Initialize largest to -Infinity.
  let secondLargestNumber = -Infinity; // Initialize second-largest to -Infinity.
  // Iterate through the array to find the largest and second-largest numbers.
  for (let num of arr) {
    if (num > largestNumber) {
      secondLargestNumber = largestNumber; // Update second-largest when a new largest is found.
      largestNumber = num; // Update the largest number.
    } else if (num > secondLargestNumber) {
      secondLargestNumber = num; // Update second-largest if within range.
    }
  }
  return secondLargestNumber; // Return the second-largest number.
}

console.log(findSecondLargestNumber2([1, 2, 3, 4, 5, 6])); // Output: 5
