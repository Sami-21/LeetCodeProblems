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
var s = "3[a]2[bc]";
console.log(s.repeat(2));