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
 */
exports.printHalfDiamondPattern = (n) => {
  let halfDiamondString = "";
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
};