/**
Check if an Array is Sorted
Problem Statement: Given an array of size n, write a program to check if the given array is sorted in 
(ascending / Increasing / Non-decreasing) order or not. 
If the array is sorted then return True, Else return False.
Note: Two consecutive equal values are considered to be sorted.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: 
The given array is sorted i.e Every element in the array is smaller than or equals to its next values.
So the answer is True.

Example 2:
Input: N = 5, array[] = {5,4,6,7,8}
Output: False.
Explanation:
The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values.
So the answer is False.

----------------------------------------------------------------------------
Solution-1: Brute Force Approach
---------------------------------------------------------------------------
Approach:
  - The idea is pretty simple here, we will start with the element at the 0th index, and will compare it
    with all of its future elements that are present in the array.
  - If the picked element is smaller than or equal to all of its future elements then we will move to
    the next index/element untill the whole array is traversed.
  - If any of the picked elements is greater than its future elements then return false
  - If the size of the array is zero or one (N = 0 or N = 1) or the entire array is traversed successfully
    then we will simply return true
Complexity Analysis:
  Time Complexity: O(N^2)
  Space Complexity: O(1)
 */
function checkViaBruteForceApproach() {
  const array = [11, 22, 33, 44, 55];
  console.log(`Input array is ${array}`);
  if (array.length === 0 || array.length === 1)
    return true;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j] && array[i] !== array[j])
        return false;
    }
  }
  return true;
}

/**
----------------------------------------------------------------------------
Solution-2: Optimal Approach
---------------------------------------------------------------------------
Approach:
  - As we know that for a sorted array the previous of every element is smaller than or equal to its
    current element.
  - So, Through this, we can conclude that if the previous element is smaller than or equal to the
    current element then. Then we can say that the two elements are sorted. If the condition is true for the entire array then the array is sorted.
  - We will check every element with its previous element if the previous element is smaller than
    or equal to the current element then we will move to the next index.
  - If the whole array is traversed successfully or the size of the given array is zero or one
    (i.e N = 0 or N = 1). Then we will return True else return False.
Complexity Analysis:
  Time Complexity: O(N)
  Space Complexity: O(1)
 */

function checkViaOptimalApproach() {
  const array = [11, 22, 33, 44, 55];
  console.log(`Input array is ${array}`);
  if (array.length === 0 || array.length === 1)
    return true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1] && array[i] !== array[i + 1])
      return false;
  }
  return true;
}

exports.checkIfArrayIsSorted = () => {
  console.log(checkViaBruteForceApproach());
  console.log(checkViaOptimalApproach());
  console.log();
};