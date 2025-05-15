#include <iostream>
using namespace std;

class Node {
public:
  int value;
  Node *left;
  Node *right;
  Node(int data) {
    value = data;
    left = right = NULL;
  }
};

static int index = -1;
Node *BST(int preoder[]) {
  index++;
  if (preoder[index] == -1)
    return NULL;
  Node *newNode = new Node(preoder[index]);
  Node *root = newNode;
  root->left = BST(preoder);
  root->right = BST(preoder);
  return root;
};
void printTree(Node *root) {
  if (!root)
    return;
  cout << root->value << " ";
  printTree(root->left);
  printTree(root->right);
}
int main() {
  int values[] = {50, 30, -1, -1, 70, 60, -1, -1, 80, -1, -1};
  Node *root = BST(values);
  printTree(root);
  return 0;
}