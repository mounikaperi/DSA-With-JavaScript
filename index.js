const rectangularPattern = require('../DSA/Patterns/RectangularStarPattern');
const rightAngledTriangePattern = require('../DSA/Patterns/RightAngledTrianglePattern');
const rightAngledNumberPyramidPattern = require('../DSA/Patterns/RightAngledNumberPyramid');
const rightAngledNumberPyramidPattern2 = require('../DSA/Patterns/RightAngledNumberPyramid2');
const invertedRightPyramid = require('../DSA/Patterns/InvertedRightPyramid');
const invertedNumberedRightPyramid = require('../DSA/Patterns/InvertedNumberedRightPyramid');
const starPyramid = require('../DSA/Patterns/StarPyramid');

const express = require("express")
const app = express()
app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(10000, function () {
/**
 * Patterns:
 * For outer loop - count the number of lines
 * For the inner loop - focus on the columns and try to connect then somehow to rows
 * print inside the outer for loop
 * observe symmetry (optional)
 */
  // rectangularPattern.printRectangularPattern(5);
  // rightAngledTriangePattern.printRightAngledTriangePattern(5);
  // rightAngledNumberPyramidPattern.printRightAngledNumberPyramid(5);
  // rightAngledNumberPyramidPattern2.printRightAngledNumberPyramid2(5);
  // invertedRightPyramid.printInvertedRightPyramid(5);
  // invertedNumberedRightPyramid.printInvertedNumberedRightPyramid(5);
  starPyramid.printStarPyramid(6);
});