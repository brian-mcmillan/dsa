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
    dfsPreOrder() {
        if (!this.root) return [];
        var visited = [];
        
        function helper(node){
            visited.push(node.value);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }
        
        helper(this.root);
        return console.log(visited);
    }
    dfsPostOrder() {
        if (!this.root) return [];
        var visited = [];
        
        function helper(node){
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            visited.push(node.value);
        }
        
        helper(this.root);
        return console.log(visited);
    }
    dfsInOrder(){
        if (!this.root) return [];
        var visited = [];
        
        function helper(node){
            if (node.left) helper(node.left);
            visited.push(node.value);
            if (node.right) helper(node.right);
        }
        
        helper(this.root);
        return console.log(visited);
    }
}

bst = new BinarySearchTree();

