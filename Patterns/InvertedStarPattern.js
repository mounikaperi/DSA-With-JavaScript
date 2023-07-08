/**
 * Pattern – 8: Inverted Star Pyramid
    Problem Statement: Given an integer N, print the following pattern : 
    Input Format: N = 6
    Result:     
    ***********
     *********
      *******
       ***** 
        ***    
         *
 * rows space star space
 * 0      0     11    0
 * 1      1     9     1
 * 2      2     7     2
 * 3      3     5     3
 * 4      4    `3     4
 * 5      5     1     5
 * n      i 2n-(2i+1) i
 */
exports.printInvertedStarPattern = (n) => {
  let invertedString = "";
  for (let i=0; i<n; i++) {
    for (let j=0; j<i; j++) {
      invertedString += " ";
    }
    for (let j=0; j<(2*n-(2*i+1)); j++) {
      invertedString += "*";
    }
    for (let j=0; j<i; j++) {
      invertedString += " ";
    }
    invertedString += "\n";
  }
  console.log(invertedString);
}