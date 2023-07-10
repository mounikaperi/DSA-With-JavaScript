/**
 * Pattern – 20: Symmetric-Butterfly Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
*          *
stars space stars
1     10    1
2     8     2
3     6     3
4     4     4
5     2     5
6     0     6
5     2     5
4     4     4
3     6     3
2     8     2
1     10    1
 */
// TODO: Recheck
exports.printSymmetricButterflyPattern = (n) => {
  let butterflyPattern = "";
  let spaces = 2*n-2;
  for (let i=1; i<=2*n-1; i++) {
    let stars = i;
    if (i > n) stars = 2*n-i;
    for (let j=1; j<=stars; j++) {
      butterflyPattern += "*";
    }
    for (let j=1; j<=spaces; j++) {
      butterflyPattern += " ";
    }
    for (let j=1; j<=stars; j++) {
      butterflyPattern += "*";
    }
    if (i<n) spaces -= 2;
    else spaces +=2;
    butterflyPattern += "\n";
  }
  console.log(butterflyPattern);
}