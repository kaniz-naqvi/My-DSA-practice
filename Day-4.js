/****************************Day 4*******************************/
/*****Question 01******/
//Write a function to find the first non-repeating character in a string, case-insensitive comparisons (e.g., treat 'A' and 'a' as the same character).

function firstNonRepeatingCharacter(str) {
  let lowerCaseStr = str.toLowerCase(); //Convert string to lowercase to handle case insensitivity
  //Converting string to hash table.
  let frequency = lowerCaseStr.split("").reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {});
  //Find the first character with a count of 1.
  for (let i = 0; i < str.length; i++) {
    if (frequency[lowerCaseStr[i]] === 1) {
      return str[i]; //exit the function as soon as first character found.
    }
  }
  return null;
}
console.log(firstNonRepeatingCharacter("Ayli")); //A
console.log(firstNonRepeatingCharacter("Aylia")); //y

/*****Question 02******/
//Research and write a short explanation of how collision resolution works in hash maps (e.g., chaining vs. open addressing).

//1. What is collision?
//=> A collision occurs when two different keys hash to the same index in the array.

//2. How to resolve it?
//=> 1st. Chaining (Separate Chaining)
//=> 2nd. Open Addressing

//3. Chaining (Separate Chaining)
//=> Each bucket in the hash table points to a linked list (or another data structure like a binary tree) of entries that map to the same index.
// When to use:
//Databases and Caching: In systems like databases, where the hash table may be large and entries can have high variability, chaining is often preferred. This is because it can handle collisions efficiently without degrading performance significantly, even under a high load factor.
//Dynamic Datasets: When the number of entries in the hash table can grow unpredictably (e.g., caches), chaining is a good option as it allows you to store an indefinite number of entries at each index (as linked lists or other structures).

//4. Open Addressing
//=> When a collision occurs, the algorithm searches for the next available slot in the array and places the entry there. There are several strategies for open addressing:
//When to use:
//Memory-Constrained Systems: Open addressing is often preferred in situations where memory is limited, such as embedded systems, where the hash table is stored directly in memory without additional overhead (like linked lists for chaining).
//Caches with Low Load Factor: In systems where the hash table is relatively small and entries are sparse, open addressing works well. It’s also a good choice when the hash table size is fixed and doesn’t change dynamically, as it avoids the overhead of managing additional linked structures.

//=> 1. Linear Probing: Incrementally check the next slot.
//=> 2. Quadratic Probing: Use a quadratic function to determine the next slot.
//=> 3. Double Hashing: Use a second hash function to determine the next slot.

//5. Which to choose?
// Chaining is often preferred when the hash table is expected to have a high load factor (many collisions).
// Open Addressing is useful when memory is a concern, but it requires careful handling of deletions (e.g., using tombstones).

// 6. Summary
// Chaining: Efficient and simple to implement, but requires additional memory for the linked lists.
// Open Addressing: More memory efficient as it doesn't require extra data structures, but can suffer from clustering and performance degradation as the table fills up.

//Write a function to find the first non-repeating character in a string, case-insensitive comparisons (e.g., treat 'A' and 'a' as the same character).
function firstNonRepeatingCharacter2(str) {
  let lowerStr = str.toLowerCase();
  let frequency = {};
  for (let char of lowerStr) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of str) {
    if (frequency[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingCharacter2("Aylia"));
