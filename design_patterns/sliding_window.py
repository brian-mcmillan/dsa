"""
Write a function called maxSubarraySum which accepts
an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive
elements in the array.
"""

import array


def max_subarray_sum(arr, num: int) -> int:

    # get initial max
    _max = 0
    for i in range(0, num):
        _max += arr[i]

    # sliding window approach
    temp = _max
    j = num
    while j < len(arr):
        temp = temp - arr[j - num] + arr[j]
        if temp > _max:
            _max = temp
        j += 1

    return _max


