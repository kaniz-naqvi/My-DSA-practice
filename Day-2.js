/***************************DSA day 2***************************/
/*******Question 1********/
// Remove duplicates from an array.
function removeDuplicates(arr) {
  let uniqueArr = []; // To store unique elements.
  let seen = {}; // To track seen elements.
  // Loop through the array.
  for (let num of arr) {
    // If not seen before, add to uniqueArr and mark as seen.
    if (!seen[num]) {
      uniqueArr.push(num);
      seen[num] = true;
    }
  }
  return uniqueArr; // Return the unique elements array.
}
console.log(removeDuplicates([1, 2, 2, 3, 6, 7, 8, 7, 9]));
// Output: [1, 2, 3, 6, 7, 8, 9]

/*******Question 2********/
// Reverse a string without using reverse().
function reverseString(str) {
  let left = 0,
    right = str.length - 1;
  let arr = str.split(""); // Convert string to array for manipulation.
  let temporaryStr;
  // Swap characters from both ends of the array.
  while (left < right) {
    temporaryStr = arr[left];
    arr[left] = arr[right];
    arr[right] = temporaryStr;
    left++;
    right--;
  }
  return arr.join(""); // Convert the array back to string and return.
}

console.log(reverseString("mehak"));
// Output: "kahem"
//shorter approach I learned
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("mehak")); // "kahem"
/*******Question 3********/
// Write a function to find the second-largest number in an array.
// Approach 1: Using Math.max() to find the largest and second largest.
function findSecondLargestNumber1(arr) {
  let largestNumber = Math.max(...arr);
  let secondLargestNumber = Math.max(
    ...arr.filter((num) => num < largestNumber) // Filter out the largest value.
  );
  return secondLargestNumber;
}
console.log(findSecondLargestNumber1([1, 2, 3, 4, 5, 6])); // Output: 5

// Approach 2: O(n) time complexity.
function findSecondLargestNumber2(arr) {
  let largestNumber = -Infinity; // Initialize largest to -Infinity.
  let secondLargestNumber = -Infinity; // Initialize second largest to -Infinity.
  // Iterate through the array to find the largest and second largest.
  for (let num of arr) {
    if (num > largestNumber) {
      secondLargestNumber = largestNumber; // Update second largest.
      largestNumber = num; // Update largest.
    } else if (num > secondLargestNumber) {
      secondLargestNumber = num; // Update second largest if within range.
    }
  }
  return secondLargestNumber; // Return second largest.
}

console.log(findSecondLargestNumber2([1, 2, 3, 4, 5, 6])); // Output: 5
