class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  // getting value
  insert(value) {
    const newNode = new Node(value);
    if (this.head == null) return (this.head = newNode);
    else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }
  // printing value
  printValues() {
    if (this.head == null) return console.log(`List is empty`);
    let currNode = this.head;
    let result = "";
    while (currNode !== null) {
      result += currNode.value;
      if (currNode.next !== null) {
        result += " -> ";
      }
      currNode = currNode.next;
    }
    return console.log(result);
  }
  /******* Question 1********/
  // Add a method to delete a node from the linked list by its value.
  delete(value) {
    if (this.head == null) return console.log(`List is empty.`);
    if (this.head.value == value) {
      this.head = this.head.next;
      return console.log(`Deleted the value: ${value}`);
    }
    let currNode = this.head;
    let previousNode = null;
    while (currNode !== null && currNode.value !== value) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode == null) {
      return console.log(`Not found.`);
    } else {
      previousNode.next = currNode.next;
      return console.log(`Deleted the value: ${value}`);
    }
  }
  /******* Question 2********/
  //Add a method to search for a value in the linked list and return true if found, otherwise false.
  search(value) {
    if (this.head == null) return console.log(`List is empty.`);
    if (this.head.value == value) return console.log(true);
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.value == value) return console.log(true);
      currNode = currNode.next;
    }
    return console.log(false);
  }
}
let list = new LinkedList();
list.insert(9);
list.insert(6);
list.insert(5);
list.insert(7);
list.printValues(); //9 -> 6 -> 5 -> 7
list.delete(5); //Deleted the value: 5
list.printValues(); //9 -> 6 -> 7
list.search(7); //true
list.search(5); //false
