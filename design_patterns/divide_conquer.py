"""
Given a sorted array of integers, write a function called search,
that accepts a value and returns the index where the value passed to the function
is located. If the value is not found, return -1.
"""


import array, math


def search(arr, val):

    _min = 0  # 1st
    _max = len(arr) - 1  # last
    
    # binary search 
    while _min <= _max:
        midpoint = math.floor((_min + _max)/2)

        if val > arr[midpoint]:
            _min = midpoint + 1
        if val < arr[midpoint]:
            _max = midpoint - 1
        else:
            return arr[midpoint]

    return -1
