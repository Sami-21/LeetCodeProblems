// Problem Overview
// We are given the number of a row in excel sheet which is represented with a String ,
// We return the corresponding number in decimal   
// Expected Input / Output
// Input : String ( Column ).
// Output : Integer ( corresponding value in decimal )
//Main Goal
// We assume our aim to give the best solution possible ( Optimal balance between time , space complexity and readability ) 
// Brute Force / Naive Approach 
// we follow the same path when we convert from binary or hexadecimal to decimal . 
// Quick reminder (10111)² => 1*2^4 + 0*2^3 + 1*2^2 + 1*2^1 + 1*2^0 
// We initiate an output variable where we store the result ( initial value zero )
// We loop through the string and for each element we apply the logic below:
// element = ( el corresponding value in decimal ) * 26 ^ ( string size - el index - 1 )
// output = output + element
// instead of using 2 or 16 our new system uses 26 as it base   (from A = 1 , B = 2 ..... to Z = 26 , total 26 )
// small example : 'ABA' => A*26^2 + B*26^1 + A*26^0 where A = 1 and B = 2 
// result 729
// Our time complexity is O(n) , space Complexity O(1)
// Our readability however is pretty bad.
// Previous Approach drawback
// This approach affects readability since our code will have a large switch statement
// Alternative appraoch ( using ASCII code )
// instead of using the switch statement , We calculate the value of each character using it's ASCII code.
// We know that "A" ASCII code is 65 and A represents 1 which implements whatever character we have X it's represented value in decimal is equal to ( (X)ASCII code - 64 )   
// element = ( el ASCII - 64 ) * 26 ^ ( string size - el index - 1 )
// element value is appended to the output .
// After we finish traversing the whole string we should have the corresponding decimal value.
var titleToNumber = function (columnTitle) {
    // Output variable initialized
    var output = 0;
    // Looping through the string 
    for (var i = 0; i < columnTitle.length; i++) {
        output += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - i - 1);
    }
    return output;
};
console.log(titleToNumber("ABA"));
