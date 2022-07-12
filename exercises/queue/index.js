// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


//|==> Solution 1 using objects.

// class Node{
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }

//     peek(){
//         return this.first;
//     }
//     //enqueue
//     add(value){
//         const newNode = new Node(value);
//         if(this.length === 0){
//             this.first = newNode;
//             this.last = newNode;
//         }else{
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         this.length++;
//         return this.last.value;
//     }
//     //dequeue
//     remove(){
//         if(this.first !== null && this.last !== null){
//             const lastItem = this.first.value;
//             if(this.length === 1){
//                 this.first = null;
//                 this.last = null;
//             }else if(this.length === 0){
//                 return 'There are no elements in this queue 🙈';
//             }else{
//                 this.first = this.first.next;
//             }
//             this.length--;
//             return lastItem;
//         }
//     }
// }

//|==> Solution 2 using an array.
class Queue {
    constructor(){
        this.data = [];
    }

    add(value){
        return this.data.unshift(value);
    }

    remove(){
        return this.data.pop();
    }
}

//const myQueue = new Queue();
// console.log(myQueue.add(1));
// console.log(myQueue.add(2));
// console.log(myQueue.add(3));
// console.log(myQueue.add(4));
// console.log(myQueue.remove());
// console.dir(myQueue);

module.exports = Queue;
