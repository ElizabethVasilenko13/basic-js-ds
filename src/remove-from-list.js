const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(head, k) {
  let previousNode = null;

  while (head && head.value === k) {
    head = head.next;
  }

  let current = head;
  while (current) {
    console.log(current);
    if (current.value === k) {
      previousNode.next = current.next;
    } else {
      previousNode = current;
    }
    current = current.next;
  }
  return head;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
    
    
console.log((removeKFromList(initial, 3)));

module.exports = {
  removeKFromList
};
