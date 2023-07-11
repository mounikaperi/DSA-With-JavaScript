/**
 * Pattern – 22: The Number Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
6 6 6 6 6 6 6 6 6 6 6 
6 5 5 5 5 5 5 5 5 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 2 1 2 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 5 5 5 5 5 5 5 5 6 
6 6 6 6 6 6 6 6 6 6 6

there are n rows n columns, subtract n from every value and get a new matrix
both loops will run 0 to 2*n-1
for each value, calculate the distance to left, right, bottom top and take the min of it
top distance will be i i.e., no or rows from top
left distance will be j i.e., no of columns from left
right distance will be 2n-1-1-j
bottom distance will be 2n-1-1-i
take minimum of all the distances
subtract from n to get the value in matrix
 */
exports.printNumberPattern = (n) => {
  let numberPattern = "";
  for (let i=0; i<2*n-1; i++) {
    for (let j=0; j<2*n-1; j++) {
      let top = i;
      let left = j;
      let right = (2*n-2)-j;
      let bottom = (2*n-2)-i;
      numberPattern += (n - Math.min(top, left, right, bottom));
    }
    numberPattern += "\n";
  }
  console.log(numberPattern);
}