/**
 * Pattern – 13: Increasing Number Triangle Pattern
Problem Statement: Given an integer N, print the following pattern : 
Result:   
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21
 */
exports.printIncreasingNumberTriangle = (n) => {
  let numberPattern = "";
  let number = 1;
  for (let i =1; i<=n; i++) {
    for (let j=1; j<=i; j++) {
      numberPattern += number + " ";
      number += 1;
    }
    numberPattern += "\n";
  }
  console.log(numberPattern);
}