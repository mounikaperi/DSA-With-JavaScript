const rectangularPattern = require('../Patterns/RectangularStarPattern');
const rightAngledTriangePattern = require('../Patterns/RightAngledTrianglePattern');
const rightAngledNumberPyramidPattern = require('../Patterns/RightAngledNumberPyramid');
const rightAngledNumberPyramidPattern2 = require('../Patterns/RightAngledNumberPyramid2');
const invertedRightPyramid = require('../Patterns/InvertedRightPyramid');
const invertedNumberedRightPyramid = require('../Patterns/InvertedNumberedRightPyramid');
const starPyramid = require('../Patterns/StarPyramid');
const invertedStarPattern = require('../Patterns/InvertedStarPattern');
const diamondStarPattern = require('../Patterns/DiamondStarPattern');
const halfDiamondPattern = require('../Patterns/HalfDiamondPattern');
const binaryNumberPattern = require('../Patterns/BinaryNumberPattern');
const numberCrownPattern = require('../Patterns/NumberCrownPattern');
const increasingNumberTriangle = require('../Patterns/IncreasingNumberTriangle');
const increasingletterTriangle = require('../Patterns/IncreasingLetterTrianglePattern');
const symmetricVoidPattern = require('../Patterns/SymmetricVoidPattern');

/**
 * Patterns:
 * For outer loop - count the number of lines
 * For the inner loop - focus on the columns and try to connect then somehow to rows
 * print inside the outer for loop
 * observe symmetry (optional)
 */
exports.patterns = () => {
  rectangularPattern.printRectangularPattern(5);
  rightAngledTriangePattern.printRightAngledTriangePattern(5);
  rightAngledNumberPyramidPattern.printRightAngledNumberPyramid(5);
  rightAngledNumberPyramidPattern2.printRightAngledNumberPyramid2(5);
  invertedRightPyramid.printInvertedRightPyramid(5);
  invertedNumberedRightPyramid.printInvertedNumberedRightPyramid(5);
  starPyramid.printStarPyramid(6);
  invertedStarPattern.printInvertedStarPattern(6);
  diamondStarPattern.printDiamondStarPattern1(5);
  diamondStarPattern.printDiamondStarPattern2(5);
  halfDiamondPattern.printHalfDiamondPattern(2);
  binaryNumberPattern.printBinaryNumberPattern(6);
  numberCrownPattern.printNumberCrownPattern(6);
  increasingNumberTriangle.printIncreasingNumberTriangle(6);
  increasingletterTriangle.printIncreasingLetterPattern(6);
  increasingletterTriangle.printReverseletterPattern(6);
  increasingletterTriangle.printAlphaRampPattern(6);
  increasingletterTriangle.printAlphaHillPattern(6);
  increasingletterTriangle.printAlphaTrianglePattern(6);
  symmetricVoidPattern.printSymmetricVoidPattern(6);
};
