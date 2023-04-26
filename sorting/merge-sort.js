function merge(arr1, arr2){
    
    let merged = [];
    
    let i = 0;
    let j = 0;
    
    // push the smaller value into merged
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            merged.push(arr1[i]))
            i++;
        } else {
            merged.push(arr2[j])
            j++;
        }
    }
    // add leftover values into merged
    while(i < arr1.length) {
        merged.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        merged.push(arr2[j])
        j++;
    }
    return merged
}


function mergeSort(arr){
   
    if(arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let lhs = mergeSort(arr.slice(0, mid));
    let rhs = mergeSort(arr.slice(mid));
    
    return merge(lhs, rhs);
