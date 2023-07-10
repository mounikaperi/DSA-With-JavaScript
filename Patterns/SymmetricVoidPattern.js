/**
 * Pattern-19: Symmetric-Void Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************
stars space stars
6       0     6
5       2     5
4       4     4
3       6     3
2       8     2
1       10    1
1       10    1 2*(n-1) = 2*(5)
2       8     2
3       6     3
4       4     4
5       2     5
6       0     6
 */
exports.printSymmetricVoidPattern = (n) => {
  let symmetricPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i); j++) {
      symmetricPattern += "*";
    }
    for (let j = 1; j <= 2 * i; j++) {
      symmetricPattern += " ";
    }
    for (let j = 0; j < (n - i); j++) {
      symmetricPattern += "*";
    }
    symmetricPattern += "\n";
  }
  let stars = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      symmetricPattern += "*";
    }
    for (let j = 1; j <= stars; j++) {
      symmetricPattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      symmetricPattern += "*";
    }
    stars = stars - 2;
    symmetricPattern += "\n";
  }
  console.log(symmetricPattern);
}