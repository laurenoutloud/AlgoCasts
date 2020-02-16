// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if (!this.head) {return null}
        let node = this.head;
        while (node.next){
            node = node.next;
        }
        return node;
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if (!this.head){return}
        this.head = this.head.next;
    }
    removeLast(){
        if (!this.head){return}
        if (!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = previous.next;
            node = node.next;
        }
        previous.next = null;
    }
    insertLast(data) {
        if (!this.head){this.head = new Node(data)}
        else {this.getLast().next = new Node(data)}
    }
    getAt(index){
        let node = this.head;
        let count = 0;
        while(node){
            if (index === count){
                return node;
            }
            node = node.next;
            count++;
        }
        return null;
    }
    removeAt(index){
        if (!this.head){return}
        if (index === 0){
            this.head = this.head.next
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next){return}
        previous.next = previous.next.next;
    }
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if (index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        

        const node = new Node(data, previous.next);
        previous.next = node;
    }
    forEach(fn){
        let node = this.head;
        let count = 0;

        while(node){
            fn(node, count);
            node = node.next;
            count++;
        }
    }
}

module.exports = { Node, LinkedList };
