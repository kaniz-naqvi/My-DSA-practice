/*******************Day 16************************/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top == null) return "empty";
    this.top = this.top.next;
  }
  printStack() {
    let curr = this.top;
    let res = [];
    while (curr !== null) {
      res.push(curr.value);
      curr = curr.next;
    }
    return console.log(res.join("->"));
  }
  /******* Question 1********/
  //Add a method to the Stack class to get the size of the stack.
  size() {
    let curr = this.top;
    let count = 0;
    while (curr !== null) {
      count++;
      curr = curr.next;
    }
    return console.log(count);
  }
}
const stack = new Stack();

stack.push(10); // Add 10 to the stack
stack.push(20); // Add 20 to the stack
stack.push(30); // Add 30 to the stack
stack.printStack(); // Output: 30 -> 20 -> 10
stack.size();
stack.pop();
stack.printStack();
/******* Question 2********/
//Implement a stack using an array.
class StackArr {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    if (!this.isEmpty) return console.log("stack is empty.");
    this.arr.pop();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  printStack() {
    return console.log(this.arr.join("->"));
  }
}
const newStack = new StackArr();
newStack.push(3);
newStack.push(5);
newStack.printStack();
newStack.pop();
newStack.printStack();
