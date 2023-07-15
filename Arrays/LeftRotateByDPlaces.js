/**
Left rotate an array by D places
Problem Statement: 
Given an array of N integers and an integer D, left rotate the array by D place.

Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , d = 3
Output: 4 5 6 7 1 2 3
Explanation: The array is rotated to the left by 3 positions.

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , d = 2 
Output: 8 9 10 11 3 7
Explanation: The array is rotated to the left by 2 positions.

Observation:
Before moving on to the solution, let’s understand how the rotation will happen for a given array.
The following illustration will clarify the rotation technique.
Assume the given array is {1,2,3,4,5,6,7} and d = 3.
Given array: [1, 2, 3, 4, 5, 6, 7]
Rotated Array: [4, 5, 6, 7, 1, 2, 3]

Now, in the above case, if we closely observe, we can notice that if the value of d = 7 
i.e. the size of the array, after rotation the array will be exactly similar to the given array. 
And the same case can be observed when the value of d is 14, 21, 28, or a multiple of 7.

So, we can conclude, that if the number of rotations is a multiple of the size of the array,
the rotations will have no effect on the given array.
if( d % n == 0) rotated array = given array, where d = number of rotations, n =size of the array

So, if d is greater than n(i.e. Size of the array), the effective number of rotations will be (d % n).

-------------------------------------------------------------------------------------------------------
Solution-1: Brute Force Approach
-------------------------------------------------------------------------------------------------------
The steps are as follows:
  - First, we will perform (d%n) to get the effective number of rotations
  - We will store the first d elements in a temporary array
  - We will shift the (n-d) elements by d places to the left using a loop (i = d to n-1)
    using 0 based indexing. Inside the loop, the shifting will be like arr[i-d] = arr[i]
  - After that we will place the elements of the temporary array in the last d places of the given array
    using another loop that starts from (n-d) and runs upto n-1 
  - While selecting elements from the temporary array, one of the ways is to use a variable
    (say j and starts from 0) and increment it inside the loop.
  - The efficient way will be the following. 
    The element at index i in the temporary array will be placed at index (n-d+i) in the given array.
    So, to place the elements in the correct position, inside the loop, we will do this: arr[i] = temp[i-(n-d)].
 
Assume the given array is {1,2,3,4,5,6,7} and d = 3.
Given Array: [1, 2, 3, 4, 5, 6, 7]
Rotated Array: [4, 5, 6, 7, 1, 2, 3]
temp: [1, 2, 3]

Complexity Analysis:
  Time Complexity: O(d) + O(n-d) + O(d) = O(n+d)
  where n = size of the array, d = the number of rotations. Each term represents each loop used in the code.
  Space Complexity: O(d) extra space as we are using a temporary array of size d.
*/

function rotateArrayBydPlacesViaBruteForce(array, d) {
  console.log(`Input array is ${array} and number of rotations to be done is ${d}`);
  const n = array.length;
  if (n === 0) return;
  d = d % n;
  if (d === 0) return;
  let temp = array.slice(0, d+1); // slice excludes last element
  for (let i=d; i<n; i++) {
    array[i - d] = array[i];
  }
  for (let i=n-d; i<n; i++) {
    array[i] = temp[i-(n-d)];
  }
  console.log(`Rotated array by ${d} number of places is ${array}`);
}

/**
-------------------------------------------------------------------------------------------------------
Solution -2 : Optimized Approach(without using any extra space): Using “Reversal Algorithm”
------------------------------------------------------------------------------------------------------- 
This is a straightforward method. The steps are as follows:

Step 1: Reverse the subarray with the first d elements (reverse(arr, arr+d)).
Step 2: Reverse the subarray with the last (n-d) elements (reverse(arr+d, arr+n)).
Step 3: Finally reverse the whole array (reverse(arr, arr+n)).
*/
function reverse(array, start, end){
  while (start <= end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start ++;
    end --;
  }
}

function rotateArrayBydPlacesViaReversalAlgo(array, d){
  console.log(`Input array is ${array} and number of rotations to be done is ${d}`);
  let n = array.length;
  d = d%n;
  if (n === 0) return;
  reverse(array, 0, d-1);
  reverse(array, d, n-1);
  reverse(array, 0, n-1);
  console.log(`Rotated array by ${d} number of places is ${array}`);
}

exports.printRotatedArrayBydPlaces = () => {
  let array = [1, 2, 3, 4, 5, 6, 7];
  const d = 3;
  rotateArrayBydPlacesViaBruteForce(array, d);
  array = [1, 2, 3, 4, 5, 6, 7];
  rotateArrayBydPlacesViaReversalAlgo(array, d);
  console.log();
}
