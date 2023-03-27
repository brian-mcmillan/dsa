
def selection_sort(arr):

    size = len(arr)

    for i in range(size):
        # new minimum index = i
        _mindex = i
        # j starts at i + 1 to skip over sorted values
        for j in range(i + 1, size):
            # if current item < minimum set current item as minimum
            if arr[j] < arr[_mindex]:
                _mindex = j
        # swap values at ith position
        if i != _mindex:  # only if there is a swap to be made
            arr[_mindex], arr[i] = arr[i], arr[_mindex]
    
    return arr
