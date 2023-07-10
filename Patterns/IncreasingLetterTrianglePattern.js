/**
 * Pattern-14: Increasing Letter Triangle Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
A
A B
A B C
A B C D
A B C D E
A B C D E F
 */
exports.printIncreasingLetterPattern = (n) => {
  let letterPattern = "";
  for (let i = 1; i<=n; i++) {
    for (let j=0; j<i ; j++) {
      letterPattern += String.fromCharCode(j + 65) + " ";
    }
    letterPattern += "\n";
  }
  console.log(letterPattern);
}

/**
 * Pattern-15: Reverse Letter Triangle Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
A B C D E F
A B C D E 
A B C D
A B C
A B
A
 */
exports.printReverseletterPattern = (n) => {
  let letterPattern = "";
  for (let i = 0; i<n; i++) {
    let letterIndex = 0;
    for (let j=n; j>i; j--) {
      letterPattern += String.fromCharCode(letterIndex + 65) + " ";
      letterIndex += 1;
    }
    letterPattern += "\n";
  }
  console.log(letterPattern);
}

/**
 * Pattern – 16: Alpha-Ramp Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
A 
B B
C C C
D D D D
E E E E E
F F F F F F
 */
exports.printAlphaRampPattern = (n) => {
  let alphaPattern = "";
  let alphaIndex = 0;
  for (let i=1; i<=n; i++) {
    for (let j=0; j<i; j++) {
      alphaPattern += String.fromCharCode(alphaIndex + 65) +  " ";
    }
    alphaPattern += "\n";
    alphaIndex++;
  }
  console.log(alphaPattern);
}

/**
 * Pattern – 17: Alpha-Hill Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
     A     
    ABA    
   ABCBA   
  ABCDCBA  
 ABCDEDCBA 
ABCDEFEDCBA
space alphabets space
5       1       5
4       3       4
3       5       3
2       7       2
1       9       1
0       11      0
 */

exports.printAlphaHillPattern = (n) => {
  let alphaPattern = "";
  for (let i=0; i<n; i++) {
    let breakpoint = (2*i+1)/2;
    for (let j=0; j<n-i-1; j++) {
      alphaPattern += " ";
    }
    for (let j=1, index=0; j<=2*i+1; j++) {
      alphaPattern += String.fromCharCode(index + 65);
      if (j <= breakpoint) index++;
      else index--;
    }
    for (let j=0; j<n-i-1; j++) {
      alphaPattern += " ";
    }
    alphaPattern += "\n";
  }
  console.log(alphaPattern);
}

/**
 * Pattern-18: Alpha-Triangle Pattern
Problem Statement: Given an integer N, print the following pattern : 
Input Format: N = 6
Result:   
F
E F
D E F
C D E F
B C D E F
A B C D E F
 */
exports.printAlphaTrianglePattern = (n) => {
  let alphaPattern = "";
  for (let i=0; i<=n; i++) {
    let alphaIndex = n - i;
    for (let j=0; j<i; j++, alphaIndex++) {
      alphaPattern += String.fromCharCode(alphaIndex + 65) + " ";
    }
    alphaPattern += "\n";
  }
  console.log(alphaPattern);
}