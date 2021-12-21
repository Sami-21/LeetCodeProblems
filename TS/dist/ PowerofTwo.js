//----------------------------Step 1----------------------------//
// We are given a integer , we return true if it is a power of two if not return false.
//----------------------------Step 2----------------------------//
// Our input : integer
// Our output : boolean (true or false) 
//----------------------------Step 3----------------------------//
// According to the given problem , we are must solve it without looping or using recursion
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach 
// we divide the given integer by 2 consecutively until we the rest is equal 0 and the integer equals 2.  
//----------------------------Step 6----------------------------//
// Criticizing the naive approach.
// The previous approach is clearly not the best approach because as we can see we have two nested loops which means that the time complexity is O(n²). 
//----------------------------Step 7----------------------------//
// The alternate approach (using HashTables)
// we can store our unique values from the array in an object as it's properties with a value of true (since we don't have hashtables pre-built in ts), and when we get a value that's already a property in our object we return true. after storing all values (whithout finding any duplicates we return false)
//----------------------------Step 8----------------------------//
// Code Walkthrough:
// 1.we prepare an empty object where we store unique values from the given array.we simply declare an empty object in typescript ( let uniqueValues:any = {};)
// 2.we loop through the given array , we store unique value (which are not one of the object properties) and give them a value of true.example uniqueValues={"0":true,"1":true}
// 3.When we encounter a value that's already a property (match found) to our object we return false.
// 4.After looping through all the array without finding a match , we return false.
//----------------------------Step 9 + 10----------------------------//
//Modularizing the code + write the code
var n = 34;
var isPowerOfTwo = function (n) {
    while (n % 2 == 0 && n / 2 <= 2) {
        if (n === 2)
            return true;
        n = n / 2;
    }
    return false;
};
console.log(isPowerOfTwo(n));
