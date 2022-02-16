"use strict";

//----------------------------Step 1----------------------------//
// We are given a string "s" , by randomly shuffling this string's another string "t" is generated then a new character is added at a random position .The added string needs to be returned
//----------------------------Step 2----------------------------//
// Input : Two Strings "S" and "T"
// Output : character (the difference between the two strings)
//----------------------------Step 3----------------------------//
// We assume that our main goal is to give the optimal solution ( taking into consideration time complexity , space complexity and readability ) .
//----------------------------Step 4----------------------------//
// Don't be an annoying F*ckwit
//----------------------------Step 5----------------------------//
// Brute Force / Naive Approach 
// We simply loop through the second string (T) and for each character we loop through the first string (S) looking for a match .
// If we find a match we simply jump to the next character in the T string
// If no match is found we return the character .
//----------------------------Step 6----------------------------//
// This approach is not the optimal solution because we are using two nested loops which means that our time complexity is O(n²) 
//----------------------------Step 7----------------------------//
// Alternative Approach 
// We can use hash tables
var S = "dafuq",
    T = "dafuqa";
S = S.replace = ("d", "fuck");
console.log(S);

var findTheDifference = function findTheDifference(s, t) {
  for (var i = 0; i < t.length; i++) {
    var exists = false;

    for (var j = 0; j < s.length; j++) {}
  }
};

console.log(findTheDifference(S, T));