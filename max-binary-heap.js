
class MaxBinaryHeap {
    constructor(){
        this.values = []
    }
    insert(val){
        this.values.push(val)
        var child = this.values.length-1;
        var parent = Math.floor((child - 1)/2)
      
        while(this.values[parent] < this.values[child]){
               // swap parent and child values
               var temp = this.values[child]; //9
               this.values[child] = this.values[parent];
               this.values[parent] = temp;
                
                // update pointers
                child = parent;
                parent = Math.floor((child-1)/2);
                
        }
        return console.log(this.values);
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        
        let idx = 0
        const length = this.values.length;
        const element = this.values[0];
        
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild  = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild> leftChild)
                    ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
        return max, this.values
    }
}
    
heap = new MaxBinaryHeap();

