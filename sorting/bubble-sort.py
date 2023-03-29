def bubble_sort(arr):
    
    # length of array by indices
    size = len(arr) - 1
    
    for i in range(size):
    
        # default swapped to False.
        swapped = False
        
        # iterate through every arr index - i.
        # where i is "bubbled-up" elements.
        for j in range(size-i):
            print(f"{arr}, COMPARING: {arr[j], arr[j+1]}")
            
            # if the current element is greater than the next element
            # swap the elements
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                # set swapped to True
                swapped = True
        print("PASS COMPLETE\n")

        # if an entire pass through (size - i) is made
        # and swapped is still False
        # the array is already sorted, return.
        if not swapped:
            return arr
        
    return arr
