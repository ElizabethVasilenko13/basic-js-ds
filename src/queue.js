const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * () queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList// returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.head = null;
    this.last = null;
  }
  
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const item = new ListNode(value);
    
    if (!this.head) {
      this.head = item;
      this.last = item;
    } else {
      this.last.next = item;
      this.last = item;
    }
  }

  dequeue() {
    if (!this.head) {
      this.tail = null;
      return null;
    }

    const currentValue = this.head.value;
    this.head = this.head.next;
    return currentValue;
  }
}
const a = new Queue();
a.enqueue(1); // adds the element to the queue
a.enqueue(3); // adds the element to the queue
a.dequeue(); // returns the top element from queue and deletes it, returns 1
console.log(a.getUnderlyingList());
// a.getUnderlyingList()// 
//const a = new Queue();
// console.log(a.enqueue(8));
// console.log(a.enqueue(20));

//console.log(a.getUnderlyingList());


module.exports = {
  Queue
};
