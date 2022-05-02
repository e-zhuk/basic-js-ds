const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const item = new ListNode(value);
    if (!this.list) {
      this.list = item;
    } else {
      let prev = null;
      let current = this.list;

      while (current) {
        prev = current;
        current = current.next;
      }
      prev.next = item;
    }
  }

  dequeue() {
    const value = this.list.value;
    this.list = this.list.next;
    return value;
  }
}

module.exports = {
  Queue
};
