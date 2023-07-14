const largestElementOfArray = require('../Arrays/LargestElementInArray');
const secondLargestElementOfArray = require('../Arrays/SecondLargestElementInArray');
const isArraySorted = require('../Arrays/CheckIfArrayIsSorted');

exports.arrays = () => {
  largestElementOfArray.printLargestElementOfArray();
  secondLargestElementOfArray.printSecondSmallestNSecondLargest();
  isArraySorted.checkIfArrayIsSorted();
};
