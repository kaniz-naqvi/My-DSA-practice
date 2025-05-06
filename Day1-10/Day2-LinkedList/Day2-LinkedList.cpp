#include <iostream>
using namespace std;

class Node {
public:
  int value;
  Node *next=NULL;
  Node(int data) { value = data; }
};

class List {
  Node *head;
  Node *tail;

public:
  List() { head = tail = NULL; };
  void pushFront(int value) {
    Node *newNode = new Node(value);
    if (head == NULL) {
      head = tail = newNode;
    } else {
      newNode->next = head;
      head = newNode;
    }
  }
  void pushBack(int value) {
    Node *newNode = new Node(value);
    if (head == NULL) {
      tail = head = newNode;
    } else {
      tail->next = newNode;
      tail = newNode;
    }
  }
  void popFront() {
    Node *temp = head;
    head = head->next;
    delete temp;
  }
  void popBack() {
    if (head == NULL)
      return;
    if (head == tail) {
      delete head;
      head = tail = NULL;
      return;
    }

    Node *curr = head;
    while (curr->next != tail) {
      curr = curr->next;
    }

    delete tail;
    tail = curr;
    tail->next = NULL;
  }
  void print() {
    Node *curr;
    curr = head;
    while (curr != NULL) {
      cout << curr->value << " -> ";
      curr = curr->next;
    }
    cout << "NULL" << endl;
  }
};
int main() {
  List myList;
  myList.pushFront(1);
  myList.pushFront(2);
  myList.pushFront(3);
  cout << "Before pushBack\n";
  myList.print();
  myList.pushBack(4);
  cout << "Before popFront\n";
  myList.print();
  myList.popFront();
  cout << "After popFront\n";
  myList.print();
  cout << "Before popBack\n";
  myList.print();
  myList.popBack();
  cout << "After popBack\n";
  myList.print();
  return 0;
}