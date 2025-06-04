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
Node *BuildTree(int preoder[]) {
  index++;
  if (preoder[index] == -1)
    return NULL;
  Node *newNode = new Node(preoder[index]);
  Node *root = newNode;
  root->left = BuildTree(preoder);
  root->right = BuildTree(preoder);
  return root;
};
void preOder(Node *root) {
  if (!root)
    return;
  cout << root->value << " ";
  preOder(root->left);
  preOder(root->right);
}
void inOder(Node *root) {
  if (!root)
    return;
  inOder(root->left);
  cout << root->value << " ";
  inOder(root->right);
}
void postOder(Node *root) {
  if (!root)
    return;
  postOder(root->left);
  postOder(root->right);
  cout << root->value << " ";
}

int main() {
  int values[] = {50, 30, -1, -1, 70, 60, -1, -1, 80, -1, -1};
  Node *root = BuildTree(values);
  preOder(root);
  cout << endl;
  inOder(root);
  cout << endl;
  postOder(root);
  return 0;
}