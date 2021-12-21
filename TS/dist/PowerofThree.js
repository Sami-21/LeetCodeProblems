//----------------------------Step 1----------------------------//
// Key Points.
// We are given a integer , we return true if it is a power of three if not return false.
//----------------------------Step 2----------------------------//
// Our input : integer.
// Our output : boolean (true or false) .
//----------------------------Step 3----------------------------//
// The main goal. 
// According to the given problem , we are must solve it without looping or using recursion.
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach.
// we divide the given integer by 2 consecutively as long as the rest is equal to 0 and the result is equal or superior then 2.  
//----------------------------Step 6----------------------------//
// Criticizing the naive approach.
// The previous approach is clearly not the best approach because as we can see we didn't respect the conditions provided to us (not using loops or recursion) . 
//----------------------------Step 7----------------------------//
// The alternative approach.
//As a passionate mathematician we can simply use log_2(n) and if the result is an integer then it is a power of three (we return true). 
//----------------------------Step 8----------------------------//
// Code Walkthrough:
// 1.we prepare an empty object where we store unique values from the given array.we simply declare an empty object in typescript ( let uniqueValues:any = {};)
// 2.we loop through the given array , we store unique value (which are not one of the object properties) and give them a value of true.example uniqueValues={"0":true,"1":true}
// 3.When we encounter a value that's already a property (match found) to our object we return false.
// 4.After looping through all the array without finding a match , we return false.
//----------------------------Step 9 + 10----------------------------//
//Modularizing the code + write the code
var n = 27;
var isPowerOfThree = function (n) {
    if (n <= 0)
        return false;
    return Math.pow(3, 19) % n === 0;
};
console.log(isPowerOfThree(n));
