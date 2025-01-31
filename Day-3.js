/****************************Day 3*******************************/
/*****Question 01******/
//Write a function to count the frequency of each character in a string.
function countFrequency(string) {
  let frequency = {};
  for (let character of string) {
    if (frequency[character]) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
  }
  return frequency;
}
console.log(countFrequency("mehak")); //{ m: 1, e: 1, h: 1, a: 1, k: 1 }
console.log(countFrequency("tayyab")); //{ t: 1, a: 2, y: 2, b: 1 }

/*****Question 02******/
//Write a function to find the most frequent element in an array.
function checkMostFrequentElement(array) {
  let frequentElement = {};
  for (let element of array) {
    if (frequentElement[element]) {
      frequentElement[element]++;
    } else {
      frequentElement[element] = 1;
    }
  }
  //looping through it to find the element with the highest frequency.
  let maxCount = 0;
  let mostFrequentElement = [];
  for (let key in frequentElement) {
    if (frequentElement[key] > maxCount) {
      maxCount = frequentElement[key];
      mostFrequentElement = [Number(key)];
    } else if (frequentElement[key] === maxCount) {
      mostFrequentElement.push(Number(key));
    }
  }
  return mostFrequentElement;
}
console.log(checkMostFrequentElement([1, 2, 1, 2, 1])); //[ 1 ]
console.log(checkMostFrequentElement([1, 1, 2, 2, 3, 3, 4, 4, 1, 3, 5])); //[ 1, 3 ]
