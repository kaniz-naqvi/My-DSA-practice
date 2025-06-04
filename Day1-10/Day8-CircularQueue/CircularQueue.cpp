#include <iostream>
using namespace std;

#define size 5
class CircularQueue {
  int front;
  int rear;
  int arr[size];
  bool isEmpty() { return front == -1; }
  bool isFull() { return (rear + 1) % size == front; }

public:
  CircularQueue() { front = rear = -1; }
  void push(int value) {
    if (isFull()) {
      cout << "Queue is FULL" << endl;
      return;
    }
    if (isEmpty()) {
      front = rear = 0;
    } else {
      rear = (rear + 1) % size;
    }
    arr[rear] = value;
  }
  void pop() {
    if (isEmpty()) {
      cout << "Queue is Empty" << endl;

    } else if (front == rear) {
      front = rear = -1;
    } else {
      front = (front + 1) % size;
    }
  }
  void print() {
    if (isEmpty()) {
      cout << "Queue is Empty" << endl;
    } else {
      int i = front;
      while (true) {
        cout << arr[i] << " ";
        if (i == rear)
          break;
        i = (i + 1) % size;
      }
      cout << endl;
    }
  }
};

int main() {
  CircularQueue queue;
  queue.push(3);
  queue.push(8);
  queue.push(0);
  queue.print();
  queue.pop();
  queue.push(2);
  queue.push(5);
  queue.pop();
  queue.push(9);
  queue.push(10);
  queue.print();
  return 0;
}