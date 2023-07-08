/**
 * Pattern – 9: Diamond Star Pattern
    Problem Statement: Given an integer N, print the following pattern : 
    Input Format: N = 6
    Result:   
        *
       ***
      ***** 
     *******
    *********
   ***********  
   ***********
    *********
     *******
      ***** 
       ***    
        *
 * rows space star space
 * 0      5     1     5
 * 1      4     3     4
 * 2      3     5     3
 * 3      2     7     2
 * 4      1     9     1
 * 5      0     11    0
 * i    n-i-1  2*i+1 n-i-1

 * 0      0     11    0
 * 1      1     9     1
 * 2      2     7     2
 * 3      3    `5     3
 * 4      4     3     1
 * 5      5     1     5
 *        i 2n-(2i+1) i
 */
exports.printDiamondStarPattern = (n) => {
  if (n >= 1 && n <= 20) {
    let diamondPatternString = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        diamondPatternString += " ";
      }
      for (let j = 0; j < 2 * i + 1; j++) {
        diamondPatternString += "*";
      }
      for (let j = 0; j < n - i - 1; j++) {
        diamondPatternString += " ";
      }
      diamondPatternString += "\n";
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        diamondPatternString += " ";
      }
      for (let j = 0; j < (2 * n - (2 * i + 1)); j++) {
        diamondPatternString += "*";
      }
      for (let j = 0; j < i; j++) {
        diamondPatternString += " ";
      }
      diamondPatternString += "\n";
    }
    console.log(diamondPatternString);
  }
}
