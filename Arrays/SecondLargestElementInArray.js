/**
Find Second Smallest and Second Largest Element in an array
Problem Statement: Given an array, find the second smallest and second largest element in the array.
Print ‘-1’ in the event that either of them doesn’t exist.

Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2
  Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 
and second smallest is 2

Example 2:
Input: [1]
Output: Second Smallest : -1
  Second Largest : -1
Explanation: Since there is only one element in the array, it is the largest and smallest element
present in the array. There is no second largest or second smallest element present.

---------------------------------------------------------------------------------------------------
Solution-1: Brute Force Approach
---------------------------------------------------------------------------------------------------
What do we do to find the largest or the smallest element present in an array? 
We ideally sort them and the first element would be the smallest of all 
while the last element would be the largest. 
Can we find the second-smallest and second-largest using a similar approach?
[ 1, 2, 4, 7, 7, 5] -> After sorting -> [1, 2, 4, 5, 7, 7] -> second largest element is 5 not 7
Hence, ideally, we cannot consider array[n-2] as second largest and array[1] as second smallest
Approach:
  - Sort the array in ascending order
  - Loop the array from right and check from second last position if the element is not equivalent to largest
    then that is the second largest element
  - Loop the array from left and check from second position if the element is not equivalent to smallest
    then that is the second smallest element
  - Print the second smallest and second largest value
 */
function findViaBruteForce() {
  const array = [1, 2, 1, 4, 7, 7, 5];
  console.log(`Input array: ${array}`);
  array.sort((a, b) => a - b);
  console.log(`Sorted array: ${array}`);
  const largest = array[array.length - 1];
  const smallest = array[0];
  let secondSmallest = -1, secondLargest= -1;
  for (let i=1; i<=array.length-1; i++) {
    if (array[i] !== smallest) {
      secondSmallest = array[i];
      break;
    }
  }
  for (let j=array.length-2; j>=0; j--) {
    if (array[j] !== largest) {
      secondLargest = array[j];
      break;
    }
  }
  console.log("Solution in BruteForce Approach");
  console.log(`Second Smallest: ${secondSmallest}`);
  console.log(`Second Largest: ${secondLargest}`);
}
exports.printSecondSmallestNSecondLargest = () => {
  findViaBruteForce();
  console.log();
};