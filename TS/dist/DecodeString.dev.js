"use strict";

//----------------------------Step 1----------------------------//
// We are given an encoded string (string),and we return its decoded string (string).
// We may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// We can also assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
//----------------------------Step 2----------------------------//
// Input :  endcoded string (string)
// Output : decoded string (string) 
// Example:
// input : s = "3[a]2[bc]"
// Output: "aaabcbc"
//----------------------------Step 3----------------------------//
// According to the given problem , why are not constrained by time , space or readabilty . However we will make speed our 1st priority.   
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach
// We simply go through the given string using a loop. 
// If we face a digit , we multiply the string within the next brackets by that digits.
// If we don't face a digit we simply append the character to the output string.  
//----------------------------Step 6----------------------------//
// The code will be a little bit messy which will affect readabilty.
//----------------------------Step 7----------------------------//
// For every charcater in our input:------------------------------------------------
// while it is a digit ---------------------------------
// append it to a empty string                         .
// end while--------------------------------------------
// let s:string = "3[a]2[bc]";
var s = "4[ab]"; // expected output : accaccacc

var decodeString = function decodeString(s, i) {
  var output = "",
      factor;

  while (i < s.length && s[i] != ']') {
    factor = "";

    if (s[i].match(/\d/)) {
      while (s[i].match(/\d/)) {
        factor += s[i++];
      }

      i++;
    } else {
      var r = "";

      while (i < s.length && s[i].match(/[a-z]/)) {
        r += s[i++];
      }

      console.log(parseInt(factor));

      for (var k = 0; k < parseInt(factor); k++) {
        output += r;
      }
    }
  }

  return output;
};

console.log(decodeString(s, 0));