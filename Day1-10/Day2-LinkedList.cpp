#include <iostream>
#include <string>
using namespace std;

class Product {
private:
  int serial;
  int productId;
  Product *next;

public:
  Product(int s = 0, int pid = 0) {
    serial = s;
    productId = pid;
    next = nullptr;
  }

  int getSerial() { return serial; }

  int getProductId() { return productId; }

  Product *getNext() { return next; }

  void setNext(Product *nxt) { next = nxt; }
};

class Queue {
private:
  Product *front;
  Product *rear;

public:
  Queue() { front = rear = nullptr; }

  void enqueue(int serial, int pid) {
    Product *newNode = new Product(serial, pid);
    if (rear == nullptr) {
      front = rear = newNode;
    } else {
      rear->setNext(newNode);
      rear = newNode;
    }
    cout << "Added -> Serial: " << serial << ", Product ID: " << pid << endl;
  }

  void dequeue() {
    if (front == nullptr) {
      cout << "Queue is empty.\n";
      return;
    }

    Product *temp = front;
    cout << "Sold product with serial: " << temp->getSerial()
         << " and ID: " << temp->getProductId() << endl;
    front = front->getNext();

    if (front == nullptr)
      rear = nullptr;

    delete temp;
  }

  void displayFront() {
    if (front != nullptr) {
      cout << "First product in queue -> Serial: " << front->getSerial()
           << ", Product ID: " << front->getProductId() << endl;
    }
  }

  void displayRear() {
    if (rear != nullptr) {
      cout << "Last product in queue -> Serial: " << rear->getSerial()
           << ", Product ID: " << rear->getProductId() << endl;
    }
  }
};

int main() {
  string studentID = "BC230409379";
  string last3 = studentID.substr(studentID.length() - 3);
  string last4 = studentID.substr(studentID.length() - 4);

  int smartphones = last3[0] - '0';
  int tablets = last3[1] - '0';
  int watches = last3[2] - '0';

  int productID = stoi(last4);
  int serial = 1;

  Queue q;

  cout << "Student ID: " << studentID << endl;
  cout << "==============================\n\n";

  cout << smartphones << " smartphones being added to inventory:\n";
  for (int i = 0; i < smartphones; ++i) {
    q.enqueue(serial++, productID++);
  }

  cout << "\n" << tablets << " tablets being added to inventory:\n";
  for (int i = 0; i < tablets; ++i) {
    q.enqueue(serial++, productID++);
  }

  cout << "\n" << watches << " smart watches being added to inventory:\n";
  for (int i = 0; i < watches; ++i) {
    q.enqueue(serial++, productID++);
  }

  cout << "\n-----------------------------------------\n";
  q.displayFront();
  cout << "-----------------------------------------\n";
  q.displayRear();

  cout << "\n\nSelling 2 products...\n";
  q.dequeue();
  q.dequeue();

  cout << "-----------------------------------------\n";
  q.displayFront();
  cout << "-----------------------------------------\n";

  return 0;
}
