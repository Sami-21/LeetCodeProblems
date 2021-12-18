//----------------------------Step 1----------------------------//
// We are given an array of integers (we assume it's not sorted), we return a true if at least one value is repeated in the array, else we return false.
//----------------------------Step 2----------------------------//
// Our input : array of integers
// Our output : boolean (true or false) 
//----------------------------Step 3----------------------------//
// According to the given problem , we are not limited to space or memory or readability . However, an average engineer will solve the problem and a great one will make a good use of everything to make the solution as efficient as possible.
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach 
// we can  use 2 nested loops to traverse our array and compare each value with all the values in the array. If we have a match we simply return true . else we return false after looping through all values .
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
var nums = [0, 2, 3, 1]; // our input.
var containsDuplicate = function (arr) {
    // Declaring the initial empty object.
    var uniqueValues = {};
    //Looping through the given array.
    for (var i = 0; i < arr.length; i++) { //O(N)
        //When finding a match (array element === object property) we return true
        if (uniqueValues[arr[i]]) { //O(1)
            return true;
        }
        //When no match is found we append a new property to the object (object.[array[i]]=true) 
        else { //O(1)
            uniqueValues[arr[i]] = true;
        }
    }
    // The time complexity is O(N*1*1) => O(N) , which is significantly better then O(N²)
    //after looping through all the array without finding a match we simply return false
    return false;
};
containsDuplicate(nums);
