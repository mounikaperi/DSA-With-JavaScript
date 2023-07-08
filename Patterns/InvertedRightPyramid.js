/**
 * Pattern-5: Inverted Right Pyramid
    Problem Statement: Given an integer N, print the following pattern : 
    Input Format: N = 6
    Result:
    * * * * * *
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
 */
exports.printInvertedRightPyramid = (n) => {
  let invertedPatternString = "";
  if (n>=1 && n<=20) {
    for (let i=1; i<=n; i++) {
      for (let j=n; j>=i; j--) {
        invertedPatternString += "* ";
      }
      invertedPatternString += "\n";
    }
    console.log(invertedPatternString);
  }
}