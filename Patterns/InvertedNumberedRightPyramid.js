/**
 * Pattern – 6: Inverted Numbered Right Pyramid
    Problem Statement: Given an integer N, print the following pattern : 
    Input Format: N = 6
    Result:
    1 2 3 4 5 6
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2 
    1
 */
exports.printInvertedNumberedRightPyramid = (n) => {
  let invertedPatternString = "";
  if (n>=1 && n<=20) {
    for (let i=n; i>=1; i--) {
      for (let j=1; j<=i; j++) {
        invertedPatternString += j + " ";
      }
      invertedPatternString += "\n";
    }
    console.log(invertedPatternString);
  }
}