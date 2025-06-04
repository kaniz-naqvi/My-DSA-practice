#include <iostream>
using namespace std;
class Node {
public:
  int data;
  Node *next;
  Node(int value) {
    data = value;
    next = NULL;
  }
};
class Queue {
  Node *front;
  Node *rear;

public:
  Queue() {
    front = NULL;
    rear = NULL;
  }
  void enqueue(int value) {
    Node *newNode = new Node(value);
    if (empty()) {
      front = rear = newNode;
    } else {
      rear->next = newNode;
      rear = newNode;
    }
  }
  void dequeue() {
    if (empty()) {
      cout << "Queue is empty!" << endl;
      return;
    }
    Node *temp = front;
    front = front->next;
    delete temp;
  }
  int getFront() { return front->data; }
  bool empty() { return front == NULL; }
  void print() {
    Node *curr = front;
    while (curr != NULL) {
      cout << curr->data << "->";
      curr = curr->next;
    }
    cout << "NULL" << endl;
  }
};
int main() {
  Queue q;
  q.enqueue(8);
  q.enqueue(10);
  q.enqueue(0);
  q.print();
  q.dequeue();
  q.print();
  return 0;
}