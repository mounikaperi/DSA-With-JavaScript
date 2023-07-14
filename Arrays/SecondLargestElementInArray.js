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
Complexity Analysis:
  In worst case, the traversal happens whole array from N-1 to 0 and there might be a case where the second 
  largest might not exist. 
  So, first we sort and second we might traverse the entire array
  Time Complexity: O(NlogN + N), For sorting the array
  Space Complexity: O(1)
 */
function findViaBruteForce() {
  const array = [1, 2, 1, 4, 7, 7, 5];
  console.log(`Input array: ${array}`);
  if (array.length < 2)
    return -1;
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
  console.log(`Smallest: ${smallest}`);
  console.log(`Largest: ${largest}`);
  console.log(`Second Smallest: ${secondSmallest}`);
  console.log(`Second Largest: ${secondLargest}`);
}

/**
---------------------------------------------------------------------------------------------------
Solution-2: Better Approach
---------------------------------------------------------------------------------------------------
Even though we want to have just the second smallest and largest elements, we are still sorting the entire array
for that and thus increasing the time complexity. 
Can we somehow try to not sort the array and still get our answer? 
Approach:
  - Find the smallest and largest element in the array in single traversal
  - After this, we once again traverse the array and find an element that is just greater than the smallest
    element we just found.
  - Similarly, we would find the largest element which is just smaller than the largest element we found.
    Indeed, this is our second smallest and second largest element
Time Complexity:
  Time Complexity: O(N + N) === O(N), We do two linear traversals in our array
  Space Complexity: O(1)
*/
function findViaBetterApproach() {
  const array = [1, 2, 1, 4, 7, 7, 5];
  console.log(`Input array: ${array}`);
  if (array.length < 2)
    return -1;
  let smallest=Infinity, largest=-Infinity, secondLargest=-Infinity, secondSmallest=Infinity;
  for (let currentValue of array) {
    largest = Math.max(largest, currentValue);
    smallest = Math.min(smallest, currentValue);
  }
  for (let currentValue of array) {
    if (currentValue > secondLargest && currentValue !== largest )
      secondLargest = currentValue;
    if (currentValue < secondSmallest && currentValue !== smallest) 
      secondSmallest = currentValue;
  }
  console.log("Solution in Better Approach");
  console.log(`Smallest: ${smallest}`);
  console.log(`Largest: ${largest}`);
  console.log(`Second Smallest: ${secondSmallest}`);
  console.log(`Second Largest: ${secondLargest}`);
}

/**
 * If equivalent to largest donot do anything
 */
function findViaOptimalApproach() {
  const array = [1, 2, 1, 4, 7, 7, 5];
  console.log(`Input array: ${array}`);
  if (array.length < 2)
    return -1;
  let largest = -Infinity, secondLargest = -Infinity, smallest = Infinity, secondSmallest = Infinity;
  for (let i=0; i<array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] !== largest) {
      // if it is equivalent to largest do not do anything, largest shouldnot be changed
      // but you should check the second largest, if it is greater then set it.
      secondLargest = array[i];
    } 
  } 
  for (let i=0; i<array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (array[i] < secondSmallest && array[i] !== smallest) {
      secondSmallest = array[i];
    }
  }
  console.log("Solution in Optimal Approach");
  console.log(`Smallest: ${smallest}`);
  console.log(`Largest: ${largest}`);
  console.log(`Second Smallest: ${secondSmallest}`);
  console.log(`Second Largest: ${secondLargest}`);
}

exports.printSecondSmallestNSecondLargest = () => {
  findViaBruteForce();
  findViaBetterApproach();
  findViaOptimalApproach();
  console.log();
};