const { patterns } = require("../handlers/patterns");

/**
 * Pattern – 12: Number Crown Pattern
Problem Statement: Given an integer N, print the following pattern : 
 * Input Format: N = 6
Result:   
1          1
12        21
12       321
1234    4321
12345  54321
123456654321
 */
exports.printNumberCrownPattern = (n) => {
  let patternString = "";
  let space = 2*(n-1);
  for (let i=1; i<=n; i++) {
    for (let j=1; j<=i; j++) {
      patternString += j + " ";
    }
    for (let j=1; j<=space; j++) {
      patternString += "  ";
    }
    for (let j=i; j>=1; j--) {
      patternString += j + " ";
    }
    patternString += "\n";
    space -= 2;
  }
  console.log(patternString);
}