/**
 * Pattern – 4: Right-Angled Number Pyramid – II
    Problem Statement: Given an integer N, print the following pattern : 
    Input Format: N = 6
    Result:
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
    6 6 6 6 6 6
 */
exports.printRightAngledNumberPyramid2 = (n) => {
  let patternString = "";
  if (n>=1 && n<=20) {
    for (let i=1; i<=n; i++) {
      for (let j=1; j<=i; j++) {
        patternString += i;
        patternString += " ";
      }
      patternString += "\n";
    }
    console.log(patternString);
  }
}