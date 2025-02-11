/****************************Day 9*******************************/
/*****Question 01******/
//Write a function to implement Insertion Sort and test it on the following array:
//const arr = [4, 3, 2, 10, 12, 1, 5, 6];
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// output: [1, 2,  3,  4, 5, 6, 10, 12]
console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));

/*****Question 02******/
//Write a function to implement Merge Sort and test it on the following array:
//const arr = [12, 11, 13, 5, 6, 7];
function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  //recursive case
  let mid = Math.floor(arr.length / 2);
  let right = mergeSort(arr.slice(mid));
  let left = mergeSort(arr.slice(0, mid));
  //shorting
  return merge(left, right);
}
function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  //to handel edge cases
  result = result.concat(left.slice(i)).concat(right.slice(j));
  return result;
}
console.log(mergeSort([12, 11, 13, 5, 6, 7]));
