/**
 * Pattern – 3: Right-Angled Number Pyramid
 * Input Format: N = 6
    Result:
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    1 2 3 4 5 6
 */
exports.printRightAngledNumberPyramid = (n) => {
  let rightAngledNumberPyramidString = "";
  if (n>=1 && n<=20) {    
    for (let i=1; i<=n; i++) {
      for (let j=1; j<=i; j++) {
        rightAngledNumberPyramidString += j;
        rightAngledNumberPyramidString += " ";
      }
      rightAngledNumberPyramidString += "\n";
    }
    console.log(rightAngledNumberPyramidString);
  }
}