/**
 * Pattern – 11: Binary Number Triangle Pattern
 * Problem Statement: Given an integer N, print the following pattern :
 * Input Format: N = 6
Result:   
1
01
101
0101
10101
010101
Solution:
0, 2, 4, 6... even rows start with 1, hence setup start as 1 if the i is divisible by 2 else set to 0
start = 1-start will flip the value that is 0 if 1 and 1 if 0
*/
exports.printBinaryNumberPattern = (n) => {
  let start = 0;
  let patternString = "";
  for (let i=0; i<n; i++) {
    if (i%2 === 0) start = 1;
    for (let j=0; j<=i; j++) {
      patternString += start;
      start = 1-start;
    }
    patternString += "\n";
  }
  console.log(patternString);
};