/**
 * Pattern – 7: Star Pyramid
    Problem Statement: Given an integer N, print the following pattern : 
    Input Format: N = 6
    Result:
        *     
       ***    
      *****   
     *******  
    ********* 
   ***********
 */
/**
 * outer loop - n
 * inner loop columns
 * space stars space
 * rows space star space
 * 0      4     1     4
 * 1      3     3     3
 * 2      2     5     2
 * 3      1     7     1
 * 4      0     9     0
 * n    n-i-1  2*i+1 n-i-1
 */
exports.printStarPyramid = (n) => {
  if (n>=1 && n<=20) {
    let starPyramidString = "";
    for (let i=0; i<n; i++) {
      for (let j=0; j<n-i-1; j++) {
        starPyramidString += " ";
      }
      for (let j=0; j<2*i+1; j++) {
        starPyramidString += "*";
      }
      for (let j=0; j<n-i-1; j++) {
        starPyramidString += " ";
      }
      starPyramidString += "\n";
    }
    console.log(starPyramidString);
  }
}