def bubble_sort(arr):
    
    size = len(arr) - 1
    
    for i in range(size):
    
        swapped = False
        
        # iterate through every arr index - i.
        # where i is "bubbled-up" elements.
        for j in range(size-i):
            print(f"{arr}, COMPARING: {arr[j], arr[j+1]}")
            
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                
        print("PASS COMPLETE\n")

        if not swapped:
            return arr
        
    return arr
