/*******************Day 14************************/
class Node {
  constructor(value) {
    this.value = value;
    (this.next = null), (this.previous = null);
  }
}
class DLL {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  insertAtStart(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.tail = this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.tail = this.head = newNode;
    } else {
      newNode.previous = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  /******* Question 1********/
  //Add a method to the DoublyLinkedList class to search for a value and return true if found, otherwise false.
  search(value) {
    if (this.head === null) return console.log(`List is empty.`);
    if (this.head.value === value) {
      console.log(`The value ${value} found.`);
      return true;
    }
    if (this.tail.value === value) {
      console.log(`The value ${value} found.`);
      return true;
    }
    let curr = this.head;
    while (curr !== null) {
      if (curr.value == value) {
        console.log(`The value ${value} found.`);
        return true;
      }
      curr = curr.next;
    }

    console.log(`${value} not found in the list.`);
    return false;
  }
  /******* Question 2********/
  //Add a method to the DoublyLinkedList class to insert a node at a specific position.
  addAtPosition(position, value) {
    let newNode = new Node(value);
    if (position < 0) {
      console.log(`Invalid position`);
      return false;
    }
    if (this.head == null) {
      if (position !== 0) {
        console.log(`Invalid position, List is empty.`);
        return false;
      }
      this.head = this.tail = newNode;
    }
    if (position === 0) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    let curr = this.head;
    let index = 0;
    while (curr !== null && index < position - 1) {
      curr = curr.next;
      index++;
    }
    if (curr == null) {
      console.log(`Position is out of bound.`);
      return false;
    }
    newNode.next = curr.next;
    if (curr.next) {
      curr.next.previous = newNode;
    } else {
      this.tail = newNode;
    }
    curr.next = newNode;
    newNode.previous = curr;
    return true;
  }
  print() {
    let curr = this.head;
    let result = [];
    while (curr !== null) {
      result.push(curr.value);
      curr = curr.next;
    }
    return console.log(result.join(" <-> "));
  }
}
const doublyLinkedList = new DLL();
doublyLinkedList.insertAtStart(1);
doublyLinkedList.insertAtStart(2);
doublyLinkedList.insertAtStart(3);
doublyLinkedList.insertAtEnd(4);
doublyLinkedList.insertAtEnd(9);
doublyLinkedList.print(); //3 <-> 2 <-> 1 <-> 4 <-> 9
doublyLinkedList.search(2); //The value 2 found.
doublyLinkedList.search(7); //7 not found in the list.
doublyLinkedList.addAtPosition(2, 7);
doublyLinkedList.print();
doublyLinkedList.addAtPosition(8, 10);
