import math

def binary_search(_sorted, value):
    left = 0
    right = len(_sorted) - 1

    while left <= right:
        middle = math.floor((right + left)/2)
        if value > _sorted[middle]:
            left = middle + 1
        elif value < _sorted[middle]:
            right = middle - 1
        else:
            return _sorted[middle]
        
    return -1
