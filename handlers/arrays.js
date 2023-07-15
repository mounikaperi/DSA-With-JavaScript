const largestElementOfArray = require('../Arrays/LargestElementInArray');
const secondLargestElementOfArray = require('../Arrays/SecondLargestElementInArray');
const isArraySorted = require('../Arrays/CheckIfArrayIsSorted');
const removeDuplicates = require('../Arrays/RemoveDuplicates');

exports.arrays = () => {
  largestElementOfArray.printLargestElementOfArray();
  secondLargestElementOfArray.printSecondSmallestNSecondLargest();
  isArraySorted.checkIfArrayIsSorted();
  removeDuplicates.printArrayAfterRemovingDuplicates();
};
