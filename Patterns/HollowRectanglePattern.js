/**
 * Pattern – 21: Hollow Rectangle Pattern
Problem Statement: Given an integer N, print the following pattern :
Input Format: N = 6
Result:   
******
*    *
*    *
*    *
*    *
******
i = 0, n-1
j=0, j=n-1 then print stars
 */
exports.printHollowRectanglePattern = (n) => {
  let patternString = "";
  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      if (i == 0 || j == 0 || i == n-1 || j == n-1) {
        patternString += "*";
      } else {
        patternString += " ";
      }
    }
    patternString += "\n";
  }
  console.log(patternString);
}