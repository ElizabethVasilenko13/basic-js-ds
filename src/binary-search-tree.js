const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this.binaryTreeRoot = null;
  }

  root() {
    return this.binaryTreeRoot;
  }

  add(data) {
    this.binaryTreeRoot = addNewItem(this.binaryTreeRoot, data);

    function addNewItem(node, item) {
      if (!node) {
        return new Node(item);
      }

      if (node.data === item) {
        return node;
      }

      if (item > node.data) {
        node.right = addNewItem(node.right, item);
      } else {
        node.left = addNewItem(node.left, item);
      }
      return node;
    }
  }

  has(data) {
    function hasItem(node, item) {
      if (!node) {
        return false;
      }

      if (node.data === item) {
        return true;
      }

      if (item > node.data) {
        return hasItem(node.right, item);
      } else {
        return hasItem(node.left, item);
      }
    }

    return hasItem(this.binaryTreeRoot, data);
  }

  find(data) {
    return findElem(this.binaryTreeRoot, data);

    function findElem(node, item) {
      if (!node) {
        return null;
      }

      if (node.data === item) {
        return node;
      }

      if (item > node.data) {
        return findElem(node.right, item);
      } else {
        return findElem(node.left, item);
      }
    }
  }

  remove(data) {
    this.binaryTreeRoot = deleteNode(this.binaryTreeRoot, data);
    function deleteNode(node, item) {
      if (!node) {
        return null;
      }

      if(item > node.data) {
        node.right = deleteNode(node.right, item);
        return node;
      } else if (item < node.data) {
        node.left = deleteNode(node.left, item);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        let maxLeft = node.left;

        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;
        node.left = deleteNode(node.left, maxLeft.data)
        return node;
      }
    }
  }

  min() {
    
    let minRoot = this.binaryTreeRoot;

    while (minRoot.left) {
      minRoot = minRoot.left;
    }

    return minRoot.data;
  }

  max() {
    let maxRoot = this.binaryTreeRoot;

    while (maxRoot.right) {
      maxRoot = maxRoot.right;
    }

    return maxRoot.data;
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
      console.log(tree.find(7).data)
      console.log(tree.root());
      console.log(tree.root().data);
    console.log(tree.min());
    console.log(tree.max());


module.exports = {
  BinarySearchTree
};