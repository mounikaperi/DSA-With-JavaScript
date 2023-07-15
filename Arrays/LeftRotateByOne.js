/**
Left Rotate the Array by One
Problem Statement: Given an array of N integers, left rotate the array by one place.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation: 
Since all the elements in array will be shifted 
toward left by one so ‘2’ will now become the 
first index and and ‘1’ which was present at 
first index will be shifted at last.


Example 2:
Input: N = 1, array[] = {3}
Output: 3
Explanation: Here only element is present and so 
the element at first index will be shifted to 
last index which is also by the way the first index.

-----------------------------------------------------------------------------------
Solution : Optimal Approach
-----------------------------------------------------------------------------------
Intuition:
  The rotated array has just a difference that its first element is present at the last index of the array.
  So if we can just store the element at the first index and then shift all the elements towards the left 
  and at last put the stored element at the last index. We will get th rotated array.
Approach:
  We can take another dummy array of the same length and then shift all elements in the array toward the left
  and then at the last element store the index of 0th index of the array and print it.
Complexity Analysis:
  Time Complexity: O(n), as we iterate through the array only once.
  Space Complexity: O(n) as we are using another array of size, same as the given array.
 */
  
exports.printRotatedArrayByOneToLeft = (n) => {
  const array = [1, 2, 3, 4, 5, 6];
  console.log(`Input Array: ${array}`);
  const temp = array[0];
  for (let i=1; i<array.length; i++) {
    array[i-1] = array[i];
  }
  array[array.length-1] = temp;
  console.log(`Rotated Array: ${array}`);
  console.log();
}