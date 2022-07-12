// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next;
        //NOTE: This is possible because we are comparing if the two variables are pointed to the some space in memory.
        if(slow === fast){
            return true;
        }
    }
    return false;
}

module.exports = circular;
