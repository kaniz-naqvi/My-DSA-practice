/****************************Day 10*******************************/
/*****Question 01******/
//Write a function to implement Quick Sort and test it on the following array:
//const arr = [3, 6, 8, 10, 1, 2, 1];
function quickSort(arr) {
  let n = arr.length;
  //base case
  if (arr.length <= 1) return arr;
  //pivot
  let pivot = arr[n - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //recursive case
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
/*****Question 02******/
//Compare the performance of Merge Sort and Quick Sort on a large dataset (e.g., an array of 10,000 random numbers). Which one is faster? Why?
// Function to generate a random array
function generateRandomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 10000));
}

// Quick Sort Implementation
function quickSortTime(arr) {
  if (arr.length <= 1) return arr; // Base case

  let pivot = arr[arr.length - 1]; // Choosing last element as pivot
  let left = [],
    right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSortTime(left), pivot, ...quickSortTime(right)]; // Recursion
}

// Generate dataset
let arr10000 = generateRandomArray(10000);

// Measure Quick Sort time
console.time("Quick Sort");
quickSortTime(arr10000);
console.timeEnd("Quick Sort"); //output: Quick sort: 5.306ms

// Merge Sort Implementation
function mergeSortTime(arr) {
  if (arr.length <= 1) return arr; // Base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSortTime(arr.slice(0, mid));
  let right = mergeSortTime(arr.slice(mid));

  return merge(left, right);
}

// Function to merge two sorted arrays
function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Measure Merge Sort time
console.time("Merge Sort");
mergeSortTime(arr10000);
console.timeEnd("Merge Sort"); // output: Merge Sort: 23.478ms
//
//Which one is faster? Why?
/*
Explanation:
 Quick Sort is faster in practice because:
1. In-place Sorting: It doesn’t require extra space like Merge Sort.
2. Cache Efficiency: It accesses memory sequentially, making it cache-friendly.
3. Optimized for Random Data: Quick Sort performs well on average, even though its worst-case time complexity is O(n^2).
*/
