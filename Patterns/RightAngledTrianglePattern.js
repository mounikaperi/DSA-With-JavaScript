/**
 * Problem Statement: Given an integer N, print the following pattern : 
 * Input Format: N = 6
    Result:
    * 
    * * 
    * * *
    * * * *
    * * * * *
    * * * * * *
 */
exports.printRightAngledTriangePattern = (n) => {
  let rightAngledTrianglePatternString = "";
  if (n>=1 && n<=20) {
    for (let i=1; i<=n; i++) {
      for (let j=1; j<=i; j++) {
        rightAngledTrianglePatternString += "* ";
      }
      rightAngledTrianglePatternString += "\n";
    }
    console.log(rightAngledTrianglePatternString);
  }
};