// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  peek(){
    return this.data[this.data.length - 1];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

// const myQueue = new Queue();
// console.dir(myQueue.add(1));
// console.dir(myQueue.add(2));
// console.dir(myQueue.add(3));
// console.dir(myQueue.data);
// console.log(myQueue.peek());
// console.log(myQueue.remove());
// console.log(myQueue.remove());
// console.log(myQueue.remove());
// console.log(myQueue.remove());
// console.log(myQueue.peek());

module.exports = Queue;
