const rectangularPattern = require('../DSA/Patterns/RectangularStarPattern');
const rightAngledTriangePattern = require('../DSA/Patterns/RightAngledTrianglePattern');
const rightAngledNumberPyramidPattern = require('../DSA/Patterns/RightAngledNumberPyramid');
const rightAngledNumberPyramidPattern2 = require('../DSA/Patterns/RightAngledNumberPyramid2');

const express = require("express")
const app = express()
app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(10000, function () {
console.log("Started application on port %d", 10000)
  rectangularPattern.printRectangularPattern(5);
  rightAngledTriangePattern.printRightAngledTriangePattern(5);
  rightAngledNumberPyramidPattern.printRightAngledNumberPyramid(5);
  rightAngledNumberPyramidPattern2.printRightAngledNumberPyramid2(5);
});