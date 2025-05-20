#include <iostream>
#include <queue>
using namespace std;

class Node {
public:
  int data;
  Node *left;
  Node *right;
  Node(int value) {
    data = value;
    left = right = NULL;
  }
};
void buildTree(int arr[], int n) {
  queue<Node *> q;
  Node *root = new Node(arr[0]);
  q.push(root);
  for(int i=1; i<n;i++){
    q.push[];
  }
}
int main() {
  int arr[] = {1, 2, 3, 4, 5, -1, 6};
  int size = sizeof(arr) / sizeof(int);
  buildTree(arr, size);
  return 0;
}