// Binary search can be done only on a sorted array
// Time complexity = O(log n)
// Space complexity = O(1)

// https://www.youtube.com/watch?v=C2apEw9pgtw

/**
 * The idea is to first find the middle point of the array.
 * If the target is more than the middle point element then,
 * we'll move to the second half of the array and if the target is smaller than the mid element
 * then move to the first part of the array.
 * We'll keep repeating while changing the starting and ending indices until the element is
 * found or the starting index becomes equal or greater than the ending index.
 * If the target is not found then simply return -1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return mid;

    if (target > nums[mid]) start = mid + 1;

    if (target < nums[mid]) end = mid - 1;
  }

  return -1;
};

console.log(search(arr, 11));
console.log(search(arr, 4));
