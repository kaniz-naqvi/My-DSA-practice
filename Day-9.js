/****************************Day 9*******************************/
/*****Question 01******/
//Write a function to implement Bubble Sort and test it on the following array:
//const arr = [5, 3, 8, 4, 6];
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 6])); // output: [ 3, 4, 5, 6, 8 ]

/*****Question 02******/
//Write a function to implement Selection Sort and test it on the following array:
//const arr = [10, 7, 8, 9, 1, 5];
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort([10, 7, 8, 9, 1, 5]));
