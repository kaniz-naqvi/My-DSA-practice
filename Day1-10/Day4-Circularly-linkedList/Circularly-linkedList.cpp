#include <iostream>
#include <string>
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

class CircularList {
public:
  Node *head;
  Node *tail;
  CircularList() { tail = head = NULL; }

  void insertAtHead(int value) {
    Node *newNode = new Node(value);
    if (head == NULL) {
      head = tail = newNode;
    } else {
      newNode->next = head;
      head = newNode;
    }
    tail->next = head;
  }

  void insertAtTail(int value) {
    Node *newNode = new Node(value);
    if (head == NULL) {
      head = tail = newNode;
    } else {
      tail->next = newNode;
      tail = newNode;
    }
    tail->next = head;
  }

  void deleteFromHead() {
    int length = getLength();
    if (length > 0) {
      if (length == 1) {
        head = tail = NULL;
      } else {
        Node *temp = head;
        head = head->next;
        tail->next = head;
        delete temp;
      }
    } else {
      return;
    }
  }

  void deleteFromTail() {
    int length = getLength();
    if (length > 0) {
      if (length == 1) {
        head = tail = NULL;
      } else {
        Node *temp = head;
        while (temp->next != tail) {
          temp = temp->next;
        }

        delete tail;
        tail = temp;
        tail->next = head;
      }
    } else {
      return;
    }
  }

  int find(int target) {
    if (head == NULL)
      return 0;
    Node *temp = head;
    int index = 1;
    while (temp != tail->next) {

      if (temp->data == target) {
        cout << target << " Found at index " << index << "\n";
        return index;
      }
      temp = temp->next;
      index++;
    }
    cout << target << " Not found\n";
    return -1;
  }

  void print() {
    if (head == NULL) {
      cout << "List is empty.\n";
      return;
    }
    cout << head->data << "-> ";
    Node *curr = head->next;
    while (curr != head) {
      cout << curr->data << "-> ";
      curr = curr->next;
    }
    cout << head->data << endl;
  }

  int getLength() {
    if (head == NULL)
      return 0;
    Node *curr = head->next;
    int length = 1;
    while (curr != head) {
      length++;
      curr = curr->next;
    }
    return length;
  }
};

int main() {
  CircularList cll;
  cll.insertAtHead(4);
  cll.insertAtHead(7);
  cll.insertAtHead(9);
  cll.insertAtTail(8);
  cll.print();
  cout << cll.getLength() << "\n";
  cll.find(9);
  cll.find(89);
  return 0;
}
