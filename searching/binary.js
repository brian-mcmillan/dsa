function binarySearch(_sorted, val){
    var left = 0;
    var right = (_sorted.length-1)
    
    while (left <=  right) {
        let middle = Math.floor((left+right)/2);
        
        if (val > _sorted[middle]){
            left = middle + 1;
        }
        
        else if (val < _sorted[middle]){
            right = middle - 1;
        } 
        
        else {
            return middle;
        }}
        
    return -1;
    
    }
