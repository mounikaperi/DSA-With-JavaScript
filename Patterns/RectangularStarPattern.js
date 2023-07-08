/**
 * Problem Statement: Given an integer N, print the following pattern.
 * Example 1:
    Input: N = 3
    Output: 
    * * *
    * * *
    * * * 
 */
exports.printRectangularPattern = (n) => {
  let rectangularPatternString = "";
  if (n >=1 && n <=20) {
    for (let i=1; i<=n; i++) {
      for (let j=1; j<=n; j++) {
        rectangularPatternString += "* ";
      }
      rectangularPatternString += "\n";
    }
    console.log(rectangularPatternString);
  }
};