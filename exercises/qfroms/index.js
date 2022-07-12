// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add(value){
        this.stackOne.push(value);
    }

    remove(){  
        while(this.stackOne.peek()){
            this.stackTwo.push(this.stackOne.pop());
        }
        const record = this.stackTwo.pop();
        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop());
        }
        return record;
    }

    peek(){
        while(this.stackOne.peek()){
            this.stackTwo.push(this.stackOne.pop());
        }
        const record = this.stackTwo.peek();
        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop());
        }
        return record;
    }
}

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.add(3);
// console.dir(q.peek()); // returns 1
// console.dir(q)
// console.dir(q.peek());  // returns 1
// console.dir(q.remove()); // returns 1
// console.dir(q.remove());
// console.dir(q);

module.exports = Queue;
