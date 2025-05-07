#include <iostream>
using namespace std;

class Node {
public:
  int data;
  Node *prev;
  Node *next;
  Node(int value) : data(value), prev(NULL), next(NULL) {}
};

class DoublyLinkedList {
  Node *head;
  Node *tail;

public:
  DoublyLinkedList() { head = tail = NULL; }
  void print() {
    Node *curr = head;
    while (curr != NULL) {
      cout << curr->data << "->";
      curr = curr->next;
    }
    cout << "NULL" << endl;
  }
  int size() {
    Node *curr = head;
    int length = 0;
    while (curr != NULL) {
      curr = curr->next;
      length++;
    }
    return length;
  }
  void pushFront(int value) {
    Node *newNode = new Node(value);
    if (head == NULL) {
      head = tail = newNode;
    } else {
      newNode->next = head;
      head->prev = newNode;
      head = newNode;
    }
    print();
  }
  void pushBack(int value) {
    Node *newNode = new Node(value);
    if (head == NULL) {
      head = tail = newNode;
    } else {
      tail->next = newNode;
      newNode->prev = tail;
      tail = newNode;
    }
    print();
  }
  void popBack() {
    if (head == NULL)
      return;
    int length = size();
    if (length == 1) {
      head = tail = NULL;
    } else {
      Node *temp = tail;
      tail = temp->prev;
      tail->next = NULL;
      delete temp;
    }
    print();
  }
  void popFront() {
    if (head == NULL)
      return;
    int length = size();
    if (length == 1) {
      head = tail = NULL;
    } else {
      Node *temp = head;
      head = head->next;
      head->prev = NULL;
      temp->next = NULL;
      delete temp;
    }
    print();
  }
};

int main() {
  DoublyLinkedList ddl;
  ddl.pushFront(9);
  ddl.pushFront(10);
  ddl.pushBack(7);
  cout << ddl.size() << endl;
  ddl.popBack();
  ddl.popFront();
  return 0;
}