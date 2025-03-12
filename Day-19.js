/*******************Day 19************************/
/******* Question 1********/
//Solve the Design Circular Queue problem on LeetCode using the implementation above.
class CircularQueue {
  constructor(size) {
    this.size = size;
    this.circularQueue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
  enqueue(value) {
    if (this.isFull()) {
      this.resize();
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.circularQueue[this.rear] = value;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return false;
    }
    const removedElement = this.circularQueue[this.front];
    if (this.front === this.rear) {
      this.front = this.rear = -1;
      return removedElement;
    }
    this.front = (this.front + 1) % this.size;
    return removedElement;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return false;
    }
    let res = [];
    let i = this.front;
    while (true) {
      res.push(this.circularQueue[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }
    return console.log(res.join("->"));
  }
  /******* Question 2********/
  //Extend the circular queue to handle dynamic resizing (optional advanced challenge).
  resize() {
    let newSize = this.size * 2;
    let newQueue = new Array(newSize);
    let i = 0;
    let index = this.front;
    while (index !== this.rear) {
      newQueue[i++] = this.circularQueue[index];
      index = (index + 1) % this.size;
    }
    newQueue[i++] = this.circularQueue[this.rear];
    this.front = 0;
    this.rear = i - 1;
    this.size = newSize;
    this.circularQueue = newQueue;
  }
}
const testQueue = new CircularQueue(2);
testQueue.enqueue(6);
testQueue.enqueue(8);
testQueue.print(); // 6->8
testQueue.enqueue(4);
testQueue.enqueue(3);
testQueue.print(); //6->8->4->3
