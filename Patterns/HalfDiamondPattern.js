/**
 * Pattern – 10: Half Diamond Star Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *
  This is a symmetric pattern. till the number of stars are equal to n it is symmetric hence, stars = i;
  After that, the stars keep reducing hence stars will be 2n - i
 */
exports.printHalfDiamondPattern = (n) => {
  let halfDiamondString = "";
  // My Solution
  /**
   for (let i=0; i<n; i++) {
     for (let j=0; j<=i; j++) {
       halfDiamondString += "* ";
     }
     halfDiamondString += "\n";
   }
   for (let i=0; i<n; i++) {
     for (let j=n-1; j>i; j--) {
       halfDiamondString += "* ";
     }
     halfDiamondString += "\n";
   }
   console.log(halfDiamondString);
   */
  // Suggested Solution:
  for (let i=1; i<=2*n-1; i++) {
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }
    for (let j=1; j<=stars; j++) {
      halfDiamondString += "* ";
    }
    halfDiamondString += "\n";
  }
  console.log(halfDiamondString);
};