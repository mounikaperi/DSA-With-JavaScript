/**
Problem Statement: 
Given an array, and an element num the task is to find if num is present in the given array or not. 
If present print the index of the element or print -1

Example 1:
Input: arr[]= 1 2 3 4 5, num = 3
Output: 2
Explanation: 3 is present in the 2nd index

Example 2:
Input: arr[]= 5 4 3 2 1, num = 5
Output: 0
Explanation: 5 is present in the 0th index

Approach:
  Given an array
  We will traverse the whole array and see if the element is present in the array or not
  If found we will print the index of the element
  Otherwise, we will print -1.
 */
exports.printIfElementIsFound = () => {
  const array = [ 11, 22, 33, 44, 55, 66];
  const num = 44;
  for (let i=0; i<array.length; i++) {
    if(array[i] === num) {
      console.log(`The element ${num} is found in ${i}th index`);
      console.log();
      return i;
    }
  }
  console.log(`The element ${num} is not found in the array`);
  console.log();
  return -1;
}