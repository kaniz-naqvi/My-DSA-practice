#include <climits>
#include <iostream>
using namespace std;

int linearSearch(int arr[], int size, int target);
void reverseArray(int array[], int size);
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    cout << arr[i];
    if (i != size - 1) {
      cout << ',';
    }
  }
  cout << endl;
}
int main() {
  /*********** Question 1 *************/
  // Find smallest number in an array.
  int arr[] = {5, 6, 7, 8, 3, -1, -5, 2, 9};
  const int arrSize = sizeof(arr) / sizeof(int);
  // print array
  printArray(arr, arrSize);
  int smallNum = INT_MAX;
  int smallestNumIndex = 0;
  for (int i = 0; i < arrSize; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
      smallestNumIndex = i;
    }
    // shorter pre-built method
    // smallNum=min(arr[i], smallNum);
  }
  cout << "Smallest number is: " << smallNum << " on index " << smallestNumIndex
       << endl;

  /*********** Question 2 *************/
  // Find largest number in an array.
  int largestNum = INT_MIN;
  /*********** Question 3 *************/
  // Print index instead of number.
  int largestNumIndex = 0;
  for (int i = 0; i < arrSize; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
      largestNumIndex = i;
    }
    // shorter pre-built method
    // largestNum=max(arr[i], largestNum)
  }
  cout << "Largest number is: " << largestNum << " on index " << largestNumIndex
       << endl;

  // Linear Search In array -> Q-4
  cout << "Target 7 found at index " << linearSearch(arr, arrSize, 7) << endl;
  // Reverse an Array
  reverseArray(arr, arrSize);
  // print array
  printArray(arr, arrSize);
  return 0;
}
/*********** Question 4 *************/
// Linear Search
int linearSearch(int arr[], int size, int target) {
  for (int i = 0; i < size; i++) {
    if (target == arr[i]) {
      return i;
    }
  }
  return -1;
}
/*********** Question 5 *************/
// Reverse an Array
void reverseArray(int array[], int size) {
  int start = 0, end = size - 1;
  while (start < end) {
    swap(array[start], array[end]);
    start++;
    end--;
  }
}
