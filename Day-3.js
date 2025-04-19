function intersection(arr1, arr2) {
  let size = arr1.length,
    result = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr2[j]);
        break;
      }
    }
  }
  return new Set(result);
}
const arr1 = [1, 2, 3, 4],
  arr2 = [3, 4, 5, 6];
console.log(intersection(arr1, arr2));
