/*******************Day 22************************/
/******* Question 1********/
//Write a function to determine if a number is a happy number.
function sumSquare(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
function isHappy(num) {
  let fast = num,
    slow = num;
  do {
    slow = sumSquare(slow);
    fast = sumSquare(sumSquare(fast));
  } while (slow !== fast);
  return slow === 1;
}
console.log(isHappy(19));
console.log(isHappy(8));
/******* Question 2********/
//Given a singly linked list, determine if it is a palindrome.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function isPalindrome(head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
}
