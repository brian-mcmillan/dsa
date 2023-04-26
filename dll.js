
class Node{
    constructor(val){
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }  
        this.length++;
        return this;
    }
    pop(){
        if (!this.head){
            return undefined;
        }
        var oldTail = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
            oldTail.previous = null;
        }
        this.length--;
        return oldTail;
    }
    shift(){
        if (!this.head){
            return undefined;
        }
        var oldHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
           this.head = oldHead.next;
           this.head.previous = null;
           oldHead.next = null;
        }
        this.length--;
        return console.log(oldHead);
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = val;
            this.tail = val;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(index){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index <= this.length/2){
            var count = 0;
            var current = this.head;
            while(count !== index){
                current = current.next;
                count++
            }
            return current;
        } else {
            var count = this.length - 1;
            var current = this.tail;
            while(count !== index){
                current = current.previous;
                count--;
            }
            return current;
        }
    }
    set(index, val){
        var retrieved = this.get(index);
        if(retrieved !== null){
            retrieved.val = val;
            return true;
        } 
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        
        var newNode = new Node(val)
        var before = this.get(index - 1);
        var after = before.next;
        before.next = newNode;
        after.previous = newNode;
        newNode.next = after;
        newNode.previous = before;
        this.length++
        return true;
        }
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        
        var retrieved = this.get(index);
        retrieved.previous.next = retrieved.next;
        retrieved.next.prev = retrieved.previous;
        retrieved.previous, retrieved.next = null;
        this.length--;
        return retrieved;
    }
}
    
list = new DoublyLinkedList();
