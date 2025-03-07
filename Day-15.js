/*******************Day 15************************/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.front == null) return (this.front = this.rear = newNode);
    this.rear.next = newNode;
    this.rear = newNode;
  }
  dequeue() {
    if (this.front == null) return `Queue is empty`;
    const removedValue = this.front.value;
    if (this.front === this.rear) {
      this.rear = null;
      this.front = null;
    } else {
      this.front = this.front.next;
    }
    return removedValue;
  }
  /******* Question 1********/
  //Add a method to the Queue class to get the size of the queue.
  size() {
    if (this.front == null) return console.log(null);
    let curr = this.front;
    let size = 0;
    while (curr !== null) {
      size++;
      curr = curr.next;
    }
    return console.log(size);
  }
  printQueue() {
    if (this.front == null) return console.log(null);
    let curr = this.front;
    let result = [];
    while (curr !== null) {
      result.push(curr.value);
      curr = curr.next;
    }
    return console.log(result.join("->"));
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue(); // Output: 10 -> 20 -> 30
console.log(queue.dequeue()); // Output: 10 (removed from the front)
queue.printQueue(); // Output: 20 -> 30
queue.size(); //2
/******* Question 2********/
//Implement a circular queue using an array.
class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  isEmpty() {
    return this.front === -1;
  }
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log("Array is full");
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot dequeue.");
      return null;
    }

    const removedElement = this.queue[this.front]; // Get the front element

    if (this.front === this.rear) {
      // If there's only one element, reset the queue
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size; // Circular increment of front
    }

    console.log(`Dequeued: ${removedElement}`);
    return removedElement;
  }
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }

    let result = [];
    let i = this.front;
    while (i !== this.rear) {
      result.push(this.queue[i]);
      i = (i + 1) % this.size;
    }
    result.push(this.queue[this.rear]);

    console.log("Queue:", result.join("->"));
  }
}
const cq = new CircularQueue(5); // Create a circular queue of size 5
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.display(); // Queue: 10->20->30
console.log(cq.dequeue()); // Output: Dequeued: 10
cq.display(); // Queue: 20->30
