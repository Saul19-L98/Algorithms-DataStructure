// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(value,next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //1
    insertFirst(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
    }

    //2
    insertLast(value){
        const newNode = new Node(value);
        if(this.length === 0){
            return this.insertFirst(value);
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this; 
        }
    }

    //3
    size(){
        return this.length;
    }

    //4
    getFirst(){
        return this.head;
    }

    //5
    getLast(){
        return this.tail;
    }

    //6
    clear(){
        this.head = null;
        this.tail = null;
        this.length = (this.length - this.length);
        return this;
    }

    //7
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }

    //8
    removeLast(){
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            this.length--;
            return;
        }
        this.tail = this.tail.next;
        this.length--;
        return this; 
    }

    //9
    getAt(index){
        let currentNode = this.head;
        let counter = 0;
        while(index !== counter){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    //10
    removeAt(index){
        if(index === 0 ){
            return this.removeFirst();
        }else if(index >= this.length){
            return this.removeLast();
        }else{
            const firstPointer = this.getAt(index - 1);
            const pointerToRemove = firstPointer.next;
            firstPointer.next = pointerToRemove.next;
            this.length--;
            return this; 
        } 
    }

    //11
    insertAt(index, value){
        if(index === 0){
            return this.insertFirst(value)
        }else if(index >= this.length){
            return this.insertLast(value);
        }else{
            const newNode = new Node(value)
            const firstPointer = this.getAt(index - 1);
            const pointerToHold = firstPointer.next;
            console.dir(firstPointer);
            firstPointer.next = newNode;
            newNode.next = pointerToHold;
            this.length++;
            return this;
        }
    }

    //12
    forEach(fn){
        let currentNode = this.head;
        let counter = 0;
        while(currentNode){
            fn(currentNode,counter);
            currentNode = currentNode.next;
            counter++;
        }
    }

    //13
    //|==> Generator: Allow us to use 'for of' on the nodes.
    *[Symbol.iterator]() {
        let currentNode = this.head;
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
