class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        
        var newNode = new Node(val)

        if (!this.root){
            this.root = newNode
            return this
        }
        
        var current = this.root;
        while(true){
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if(val > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } else {
                return undefined
            }
        }
    }
    find(val){
        var current = this.root;
        while(current !== null){
            if(val < current.value){
                current = current.left;
            }
            else if(val > current.value){
                current = current.right
            } else {
                return current
            }
        }
        return undefined
        }
    bfs(){
        
        if (!this.root) return undefined;
        
        // Breadth-first Search
        var queue = [];
        var visited = [];
        queue.push(this.root);
        
        while(queue.length !== 0){
            var dequeuedNode = queue[0]
            visited.push(dequeuedNode.value)
            queue.shift(dequeuedNode)
            
            if (dequeuedNode.left !== null){
                queue.push(dequeuedNode.left)
            }
            if (dequeuedNode.right !== null){
                queue.push(dequeuedNode.right)
            }
        }
        return console.log(visited);
    }
}
