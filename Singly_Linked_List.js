class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }
    
    push(val) {
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        }
        
    pop() {
        if(!this.tail){
            return undefined
        }
        var current = this.head;
        while(current.next){
            var previous = current;
            current = current.next;
        }
        var popped = current;
        this.tail = previous;
        this.length--
        
        // handle case of list being empty after pop operation
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return popped.val;
    }
    
    shift() {
        if(!this.head){
            return undefined
        } 
        shifted = this.head;
        this.head = this.head.next;
        this.length--
        
        if (this.length === 0){
            this.tail = null
        }
        return shifted.val;
    }
    
    unshift(val) {
        var newNode = new Node(val)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = NewNode;
        }
        this.length++;
        return this;
    }
    
    get(index) {
    
        if(index < 0 || index > this.length - 1){
            return undefined
        }
        var current = this.head;
        var i = 0; 
        while(i !== index){
            current = current.next
            i++
        }
        return current
    }
    
    set(value, index) {
       if(this.get(index) === undefined){
           return false
       }
       var setter = this.get(index);
       setter.val = value;
       return true;
    }
}



var list = new SinglyLinkedList()
