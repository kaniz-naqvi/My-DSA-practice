#include <iostream>
using namespace std;

#define SIZE 10

class Stack {
  int arr[SIZE];
  int top;
  void print() {
    if (top == -1) {
      cout << "Stack is empty" << endl;
      return;
    }
    for (int i = top; i >= 0; i--) {
      cout << arr[i] << ' ';
    }
    cout << endl;
  }

public:
  Stack() { top = -1; }
  void push(int value) {
    if (top == SIZE - 1) {
      cout << "Stack Overflow" << endl;
      return;
    }
    arr[++top] = value;
    print();
  }
  void pop() {
    if (top == -1) {
      cout << "Stack is empty" << endl;
      return;
    }
    top--;
    print();
  }
  int peek() {
    if (top == -1) {
      cout << "Stack is empty" << endl;
      return -1;
    }
    return arr[top];
  }
};

int main() {
  Stack myStack;
  myStack.push(7);
  myStack.push(11);
  cout << "Peek of stack is " << myStack.peek() << endl;
  myStack.pop();
  cout << "Peek of stack is " << myStack.peek() << endl;
  return 0;
}