/**
Remove Duplicates in-place from Sorted Array
Problem Statement: 
Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique 
element appears only once. The relative order of the elements should be kept the same. If there are k elements
after removing the duplicates, then the first k elements of the array should hold the final result.
It does not matter what you leave beyond the first k elements.
Note: Return k after placing the final result in the first k slots of the array.

Example 1: 

Input: arr[1,1,2,2,2,3,3]
Output: arr[1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and 
Therefore return 3 after assigning [1,2,3] in the beginning of the array.

Example 2: 

Input: arr[1,1,1,2,2,3,3,3,3,4,4]
Output: arr[1,2,3,4,_,_,_,_,_,_,_]
Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and 
Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.
 */

/**
---------------------------------------------------------------------------------------------------
Solution-1: Brute Force Approach
---------------------------------------------------------------------------------------------------
Intuition: 
  We have to think of a data structure that does not store duplicate elements. 
  So can we use a Hash set? Yes! We can. As we know HashSet only stores unique elements.
Approach:
  1. Declare a HashSet
  2. Run a for loop from starting to the end
  3. Put every element of the array in set
  4. Store size of the set in a variable K
  5. Now put all elements of the set in the array from starting of the array
  6. Return K
Complexity Analysis:
  Time Complexity: O(NlogN) + O(N)
  Space Complexity: O(N)
 */

function removeDuplicatesViaBruteForceApproach() {
  const array = [1, 1, 2, 2, 2, 3, 3];
  console.log(`Input array: ${array}`);
  let setOfElements = new Set(array);
  let arrayFromSet = Array.from(setOfElements);
  for (let i = 0; i < arrayFromSet.length; i++) {
    array[i] = arrayFromSet[i];
  }
  console.log(`Array without Duplicates: ${arrayFromSet}`);
  console.log(`New Array length: ${arrayFromSet.length}`);

};

/**
---------------------------------------------------------------------------------------------------
Solution-2: Optimal Approach
---------------------------------------------------------------------------------------------------
Intuition: 
  We can think of 2 pointers i and j, we move j till we dont get a number arr[j] which is different from arr[i]
  As we got a unique number we will increase the i pointer and update its value by arr[j]
Approach:
  - Take a variable i as 0
  - use a for loop by using a variable 'j' from 1 to length of the array
  - if arr[i] != arr[j] and update arr[i] == arr[j]
  - After completion of the loop return i+1, i.e., size of the array of unique elements
*/
function removeDuplicatesViaOptimalApproach() {
  const array = [1, 1, 2, 2, 2, 3, 3];
  console.log(`Input array: ${array}`);
  let i=0;
  for (let j=1; j<array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  console.log(`Array without Duplicates: ${array}`);
  console.log(`New Array length: ${i+1}`);
}

exports.printArrayAfterRemovingDuplicates = () => {
  removeDuplicatesViaBruteForceApproach();
  removeDuplicatesViaOptimalApproach();
  console.log();
}