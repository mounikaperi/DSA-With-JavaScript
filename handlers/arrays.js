const largestElementOfArray = require('../Arrays/LargestElementInArray');
const secondLargestElementOfArray = require('../Arrays/SecondLargestElementInArray');
const isArraySorted = require('../Arrays/CheckIfArrayIsSorted');
const removeDuplicates = require('../Arrays/RemoveDuplicates');
const leftRotateArrayByOne = require('../Arrays/LeftRotateByOne');
const leftRotateArrayBydPlaces = require('../Arrays/LeftRotateByDPlaces');

exports.arrays = () => {
  largestElementOfArray.printLargestElementOfArray();
  secondLargestElementOfArray.printSecondSmallestNSecondLargest();
  isArraySorted.checkIfArrayIsSorted();
  removeDuplicates.printArrayAfterRemovingDuplicates();
  leftRotateArrayByOne.printRotatedArrayByOneToLeft();
  leftRotateArrayBydPlaces.printRotatedArrayBydPlaces();
};
