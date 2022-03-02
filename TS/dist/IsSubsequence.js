// Problem Overview 
// We are given two strings s and t, we return true if s is a subsequence of t, or false otherwise.
// Input : s string , t string
// Ouput : boolean
// Main goal
// our main goal is to give the optimal solution ( the best balance between time , space and readability )
// Brute Force / Naive Approach
// We go through the first string s and for each character we apply the logic below :
//    - We set a boolean __exists__ to false .
//    - We set a number __index__ .
//    - we go through the second string and look for a match:
//          - if we find a match    
