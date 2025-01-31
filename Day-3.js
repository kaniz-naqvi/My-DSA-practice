/****************************Day 3*******************************/
/*****Question 01******/
//Write a function to count the frequency of each character in a string.
function countFrequency1(string) {
  let frequency = {};
  for (let character of string) {
    frequency[character] = (frequency[character] || 0) + 1;
  }
  return frequency;
}
console.log(countFrequency1("mehak")); //{ m: 1, e: 1, h: 1, a: 1, k: 1 }
console.log(countFrequency1("tayyab")); //{ t: 1, a: 2, y: 2, b: 1 }
//alternate method using reduce
function countFrequency2(string) {
  return string.split("").reduce((frequency, char) => {
    frequency[char] = (frequency[char] || 0) + 1;
    return frequency;
  }, {});
}
console.log(countFrequency2("mehak")); //{ m: 1, e: 1, h: 1, a: 1, k: 1 }

//

/*****Question 02******/
//Write a function to find the most frequent element in an array.
function checkMostFrequentElement1(array) {
  let frequentElement = {};
  for (let element of array) {
    frequentElement[element] = (frequentElement[element] || 0) + 1;
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
console.log(checkMostFrequentElement1([1, 2, 1, 2, 1])); //[ 1 ]
console.log(checkMostFrequentElement1([1, 1, 2, 3, 3, 4, 4, 1, 3])); //[ 1, 3 ]
//alternate method using reduce
function checkMostFrequentElement2(arr) {
  const frequencyMap = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  const maxFrequency = Math.max(...Object.values(frequencyMap));
  return Object.keys(frequencyMap).filter(
    (key) => frequencyMap[key] === maxFrequency
  );
}

console.log(checkMostFrequentElement2([1, 1, 2, 3, 4, 5, 6, 5, 6, 5, 6, 7])); // [ '5', '6' ]
