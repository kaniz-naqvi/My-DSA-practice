#include <iostream>
#include <list>
using namespace std;

class Stack {
  list<int> LinkedList;

public:
  void pushFront(int value) { LinkedList.push_front(value); }
  void popBack() { LinkedList.pop_back(); }
  void popFront() { LinkedList.pop_front(); }
  int top() { return LinkedList.front(); }
  bool empty() { return LinkedList.empty(); }
};
int main() {
  Stack myStack;
  myStack.pushFront(7);
  myStack.pushFront(8);
  myStack.pushFront(11);
  while (!myStack.empty()) {
    cout << myStack.top() << ' ';
    myStack.popFront();
  }
  return 0;
}