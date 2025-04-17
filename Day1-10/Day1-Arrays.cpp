#include <iostream>
#include <climits>

using namespace std;
int linearSearch(int arr[], int size, int target);
int main() {
  /*********** Qusetion 1 *************/
  // Find smallest number in an array.
  int arr[] = {5, 6, 7, 8, 3, -1, -5, 2, 9};
  int smallNum = INT_MAX;
  const int arrSize = sizeof(arr) / sizeof(int);
  for (int i = 0; i < arrSize; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
    // shorter pre-built method
    // smallNum=min(arr[i], smallNum);
    cout << arr[i] << endl;
  }
  cout << "Smallest number is: " << smallNum << endl;
  /*********** Qusetion 2 *************/
  // Find largest number in an array.
  int largestNum = INT_MIN;
  /*********** Qusetion 3 *************/
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
  cout << "Target 7 found at index " << linearSearch(arr, arrSize, 7);

  return 0;
}
/*********** Qusetion 4 *************/
//Linear Search
int linearSearch(int arr[], int size, int target) {
  for (int i = 0; i < size; i++) {
    if (target == arr[i]) {
      return i;
    }
  }
  return -1;
}