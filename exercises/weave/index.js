// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
//  receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

///////////////////////////////////////////////////////////////////////////////////
//First try.

// function weave (sourceOne, sourceTwo){
//     this.data = [];
//     while(sourceOne.data.length !==0 || sourceTwo.data.length !==0){
//         if(sourceOne.data.length !==0){
//             this.data.push(sourceOne.peek());
//             sourceOne.remove();
//         }
//         if(sourceTwo.data.length !==0){
//             this.data.push(sourceTwo.peek());
//             sourceTwo.remove();
//         }
//     }
//     this.add = function(record){
//         return this.data.unshift(record);
//     }
//     this.remove = function(){
//         return this.data.pop();
//     }
//     this.peek = function(){
//         return this.data[this.data.length - 1];
//     }
//     return this.data;
// }
///////////////////////////////////////////////////////////////////////////////////

const Queue = require('./queue');

// |==>Solution 1.
// function weave (sourceOne, sourceTwo){
//     const q = new Queue();
//     while(sourceOne.peek() || sourceTwo.peek()){
//         if(sourceOne.peek()){
//             q.data.push(sourceOne.peek());
//             sourceOne.remove();
//         }
//         if(sourceTwo.peek()){
//             q.data.push(sourceTwo.peek());
//             sourceTwo.remove();
//         }
//     }
//     return q;
// }

// |==>Solution 2.
function weave (sourceOne, sourceTwo){
    const q = new Queue();
    while(sourceOne.peek() || sourceTwo.peek()){
        if(sourceOne.peek()){
            q.add(sourceOne.remove());
        }
        if(sourceTwo.peek()){
            q.add(sourceTwo.remove());
        }
    }
    return q;
}

module.exports = weave;
