/**
Move all Zeros to the end of the array
Problem Statement: 
You are given an array of integers, your task is to move all the zeros in the array to the end of the array 
and move non-negative integers to the front by maintaining their order.

Example 1:
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: 
All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

Example 2:
Input: 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation: 
All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

----------------------------------------------------------------------------------------------------
Solution-1: BruteForce Approach
----------------------------------------------------------------------------------------------------
The extremely naive solution, we can think of, involves the use of an extra array. The algorithm is as follows.

Algorithm:
  - Suppose, there are N-X zeros and X non-zero elements in the array. We will first copy those X non-zero 
    elements from the original array to a temporary array. 
  - Then, we will copy the elements from the temporary array one by one and fill the first X places of the 
    original array. 
  - The last N-X places of the original array will be then filled with zero. 
    Now, our task is completed.

Complexity Analysis:
  Time Complexity: 
    O(N) + O(X) + O(N-X) ~ O(2*N), where N = total no. of elements,
    X = no. of non-zero elements, and N-X = total no. of zeros.
    Reason: 
    O(N) for copying non-zero elements from the original to the temporary array. 
    O(X) for again copying it back from the temporary to the original array. 
    O(N-X) for filling zeros in the original array. So, the total time complexity will be O(2*N).

  Space Complexity: 
    O(N), as we are using a temporary array to solve this problem 
    and the maximum size of the array can be N in the worst case.
    Reason: 
    The temporary array stores the non-zero elements. 
    In the worst case, all the given array elements will be non-zero.
*/

function prepareArrayViaBruteForce() {
  const array = [1,2,0,1,0,4,0];
  console.log(`Input array: ${array}`);
  const temp = [];
  let i = 0;
  for (let j=0; j<array.length; j++) {
    if (array[j] == 0) {
      i++;
    }else if(array[j] !== 0) {
      temp.push(array[j]);
    }
  }
  for (let index = 0; index<i; index++) {
    temp.push("0");
  }
  console.log(`Array after moving zeros to end ${temp}`);
}

/**
-----------------------------------------------------------------------------------------------
Solution-2: Optimal Approach(Using 2 pointers):  
-----------------------------------------------------------------------------------------------
We can optimize the approach using 2 pointers i.e. i and j. 
The pointer j will point to the first 0 in the array and i will point to the next index.
Assume, the given array is {1, 0, 2, 3, 2, 0, 0, 4, 5, 1}. 
Now, initially, we will place the 2-pointers like the following:

Algorithm:
  First, using a loop, we will place the pointer j. If we don’t find any 0, 
  we will not perform the following steps.
  After that, we will point i to index j+1 and start moving the pointer using a loop.
  While moving the pointer i, we will do the following:
  If a[i] != 0 i.e. a[i] is a non-zero element: 
  We will swap a[i] and a[j]. Now, the current j is pointing to the non-zero element a[i]. 
  So, we will shift the pointer j by 1 so that it can again point to the first zero.
  Finally, our array will be set in the right manner.

Complexity Analysis:
  Time Complexity: O(N), N = size of the array.
  Reason: We have used 2 loops and using those loops, we are basically traversing the array once.
  Space Complexity: O(1) as we are not using any extra space to solve this problem.
 */
function prepareArrayViaOptimalApproach() {
  const array = [1,2,0,1,0,4,0];
  console.log(`Input array: ${array}`);
  let j= -1;
  for (let i=0; i<array.length; i++) {
    if (array[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) {
    console.log(`Array has no zero elements: ${array}`);
    return; // No non zero elements
  }
  for (let i=j+1; i<array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }
  console.log(`Array after moving zeros at end: ${array}`);
}

exports.printArrayWithAllZerosAtEnd = () => {
  prepareArrayViaBruteForce();
  prepareArrayViaOptimalApproach();
  console.log();
}