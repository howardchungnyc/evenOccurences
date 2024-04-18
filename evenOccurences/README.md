# First Even Occurrence

This problem focuses on finding the first item that occurs an even number of times in an array. The goal is to handle multiple even-occurrence items and return the first one. If there are no even-occurrence items, the function should return `null`.

## Problem Statement

Given an array of items, find the first item that occurs an even number of times. If multiple items occur an even number of times, return the first one encountered. If no items occur an even number of times, return `null`.

## Examples

Here are a few examples to illustrate the problem:

- `evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])` returns `4`
  - Explanation: The item `4` occurs twice (even number of times) and appears first in the array.

- `evenOccurrence([1, 2, 3, 4, 5, 6, 7, 8, 9])` returns `null`
  - Explanation: No item occurs an even number of times in the array.

- `evenOccurrence([1, 1, 2, 2, 3, 3, 4, 4])` returns `1`
  - Explanation: Both `1` and `2` occur an even number of times, but `1` appears first in the array.

- `evenOccurrence([])` returns `null`
  - Explanation: The array is empty, so no items occur an even number of times.