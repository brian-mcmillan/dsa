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
        var newNode = new Node(val);
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
            return undefined;
        }
        var current = this.head;
        while(current.next){
            var previous = current;
            current = current.next;
        }
        var popped = current;
        this.tail = previous;
        this.length--;
        
        // handle case of list being empty after pop operation
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return popped.val;
    }    
    shift() {
        if(!this.head){
            return undefined;
        } 
        shifted = this.head;
        this.head = this.head.next;
        this.length--;
        
        if (this.length === 0){
            this.tail = null;
        }
        return shifted.val;
    }
    unshift(val) {
        var newNode = new Node(val);

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
            return undefined;
        }
        var current = this.head;
        var i = 0; 
        while(i !== index){
            current = current.next;
            i++;
        }
        return current;
    }   
    set(value, index) {
       if(this.get(index) === undefined){
           return false;
       }
       var setter = this.get(index);
       setter.val = value;
       return true;
    } 
    insert(val, index) {
        if(index < 0 || index > this.length - 1){
            return false;
        }
        if(index === 0) {
            return !!this.unshift(val)
        } 
        if(index === this.length - 1) {
            return !!this.push(val)
        } 
        
        var previous = this.get(index-1);
        var current = previous.next;
        var newNode = new Node(val);
             
        previous.next = newNode;
        newNode.next = current; 
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length - 1){
            return false
        }
        if(index === 0){
            return !!this.shift()
        }
        if(index === this.length - 1){
            return !!this.pop()
        }
        
        var previous = this.get(index - 1);
        var deleted = previous.next;
        var after  = deleted.next;
        previous.next = after;
        this.length--;
        
        return deleted;
    }
    reverse(){
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        var i = 0;
        var next;
        var previous = null;
        while(i < this.length){
            next = temp.next;
            temp.next = previous;
            previous = temp;
            temp = next;
            i++;
        } 
        return this;
    }
    log(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
            }
        console.log(arr);
        }
}

var list = new SinglyLinkedList()
