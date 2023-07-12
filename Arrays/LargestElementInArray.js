/**
Find the Largest element in an array
Problem Statement: 
Given an array, we have to find the largest element in the array.
Sample Input 1:
6
4 7 8 6 7 6 
Sample Output 1:
8
Explanation Of Sample Input 1:
The answer is 8.
From {4 7 8 6 7 6}, 8 is the largest element.
----------------------------------------------------------------------------
Solution-1: Brute Force Approach
---------------------------------------------------------------------------
We can sort the array in ascending order, hence the largest element will be at the last 
index of the array.
Approach: 
  - Sort the array in ascending order
  - Print the (size of the array - 1)th index
Complexity Analysis:
  Time Complexity: O(N*log(N))
  Space Complexity: O(N)
----------------------------------------------------------------------------
Solution-2: Recursive Approach
---------------------------------------------------------------------------
We can maintain a max variable that will update whenever the current value is greater
than the value in the max variable.
Approach:
  - Create a max variable and initialize it with array[0]
  - Use a for loop and compare it with other elements of the array
  - If any element is greater than the max value, update the max value with the element's value
  - Print the max value;
Complexity:
  Time Complexity - O(N)
  Space Complexity - O(1)
 */
function findLargestElementViaBruteForce() {
  const array = [8, 10, 5, 7, 9];
  console.log(`Input array: ${array}`);
  array.sort((a,b) => a - b);
  console.log(`Sorted array: ${array}`);
  console.log(`Largest Element in Brute Force Approach: ${array[array.length - 1]}`);
};
function findLargestElementViaRecursiveApproach() {
  const array = [8, 10, 5, 7, 9];
  let largestValue = array[0];
  for (let currentValue of array) {
    if (currentValue > largestValue) {
      largestValue = currentValue;
    }
  }
  console.log(`Largest Element in Recursive Approach: ${largestValue}`);
};    
exports.printLargestElementOfArray = () => {
  findLargestElementViaBruteForce();
  findLargestElementViaRecursiveApproach();
  console.log();
};

