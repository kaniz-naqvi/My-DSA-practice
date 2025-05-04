#include <iostream>
using namespace std;

// Node structure for linked list
struct Node {
  int data;
  Node *next;
  Node(int val) : data(val), next(nullptr) {}
};

// Function to print the list
void printList(Node *head) {
  while (head) {
    cout << head->data << " -> ";
    head = head->next;
  }
  cout << "NULL\n";
}

// Function to add node at the start
void addAtStart(Node *&head, int val) {
  Node *newNode = new Node(val);
  newNode->next = head;
  head = newNode;
}

// Function to add node at the end
void addAtEnd(Node *&head, int val) {
  Node *newNode = new Node(val);
  if (!head) {
    head = newNode;
    return;
  }
  Node *temp = head;
  while (temp->next)
    temp = temp->next;
  temp->next = newNode;
}

// Function to remove node from start
void removeFromStart(Node *&head) {
  if (!head)
    return;
  Node *temp = head;
  head = head->next;
  delete temp;
}

// Function to remove node from end
void removeFromEnd(Node *&head) {
  if (!head)
    return;
  if (!head->next) {
    delete head;
    head = nullptr;
    return;
  }
  Node *temp = head;
  while (temp->next->next)
    temp = temp->next;
  delete temp->next;
  temp->next = nullptr;
}

int main() {
  cout << "-------------- Book Inventory Management (BC230409379) "
          "--------------\n";

  // Extract first and last digits
  string id = "BC230409379";
  char firstChar = id[2];
  char lastChar = id[id.length() - 1];

  int firstDigit = firstChar - '0';
  int lastDigit = lastChar - '0';

  cout << "Extracted First and Last Digits are:\n";
  cout << firstDigit << lastDigit << "\n\n";

  Node *head = nullptr;

  // Add First digit at start
  cout << "Added First digit at start of List:\n";
  addAtStart(head, firstDigit);
  addAtEnd(head, 101);
  addAtEnd(head, 102);
  addAtEnd(head, 103);
  printList(head);
  cout << "\n";

  // Add Last digit at end
  cout << "Added Last digit at Last of List:\n";
  addAtEnd(head, lastDigit);
  printList(head);
  cout << "\n";

  // Remove First digit
  cout << "Removed First digit from List:\n";
  removeFromStart(head);
  printList(head);
  cout << "\n";

  // Remove Last digit
  cout << "Removed Last digit from List:\n";
  removeFromEnd(head);
  printList(head);
  cout << "\n";

  return 0;
}
