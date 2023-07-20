/**
Union of Two Sorted Arrays
Problem Statement: 
Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
The union of two arrays can be defined as the common and distinct elements in the two arrays.
NOTE: Elements in the union should be in ascending order.

---------------------------------------------------------------------------------------------
Solution-1: Using Map (BruteForce Approach)
--------------------------------------------------------------------------------------------
  Our aim is to find the common elements in arr1 and arr2, and the distinct elements of arr1,arr2. 
  Use a Single map to find the frequencies of elements in arr1 and arr2.
  As we are using only a single map the common element in arr1 and arr2 are treated as a single element 
    for finding frequency, so there would be no duplicates.
Why not unordered_map?
  In unordered_map the keys are stored in random order, while in the map the keys are stored in sorted order
    (ascending order by default). As we require elements of the union to be in ascending order, 
    using a map is preferable.
  We can also use unordered_map, but after finding the union of arr1 and arr2, we need to sort the union vector
    to get the elements of the union in sorted order.
 */

function findUnionViaBruteForce(array1, array2) {
  const frequency = new Map();
  const union = [];
  for (let i=0; i<array1.length; i++) {
    frequency.set(array1[i], (frequency.get(i) || 0) + 1);
  }
  for (let i=0; i<array2.length; i++) {
    frequency.set(array2[i], (frequency.get(i) || 0) + 1);
  }
  for (let [num, count] of frequency) {
    union.push(num);
  }
  return union;
}

exports.findUnionOfSortedArrays = () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = [2, 3, 4, 4, 5, 11, 12];
  let union = findUnionViaBruteForce(arr1, arr2);
  console.log(`Union of arr1 and arr2 is: ${union.join(" ")}`);
  console.log();
}