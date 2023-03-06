"""
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
"""

import array


def count_unique_values(arr) -> int:
    i = 0
    j = 1

    while j < len(arr):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]
        j += 1

    return i + 1


"""
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair DNE.
"""


def sum_zero(arr) -> array:
    left = 0
    right = len(arr)-1  # last index position

    while left < right:
        _sum = arr[left] + arr[right]
        if _sum == 0:
            return print(arr[left], arr[right])
        elif _sum > 0:
            right -= 1
        else:
            left += 1

    return None

