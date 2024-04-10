/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * Examples:
 * - evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]) returns 4
 *   Explanation: 4 occurs twice (even number of times) and appears first in the array
 *
 * - evenOccurrence([1, 2, 3, 4, 5, 6, 7, 8, 9]) returns null
 *   Explanation: No item occurs an even number of times
 *
 * - evenOccurrence([1, 1, 2, 2, 3, 3, 4, 4]) returns 1
 *   Explanation: Both 1 and 2 occur an even number of times, but 1 appears first
 *
 * - evenOccurrence([]) returns null
 *   Explanation: The array is empty, so no items occur an even number of times
 */

function evenOccurrence(arr) {
  // Write your code here
}

// Test cases
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])); // Output: 4
console.log(evenOccurrence([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: null
console.log(evenOccurrence([1, 1, 2, 2, 3, 3, 4, 4])); // Output: 1
console.log(evenOccurrence([])); // Output: null
