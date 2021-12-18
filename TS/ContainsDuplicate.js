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
var nums = [0, 2, 3, 1];
var ContainesDuplicate = function (arr) {
    var hashtable = {};
    for (var i = 0; i < arr.length; i++) {
        if (hashtable[arr[i]]) {
            console.log(hashtable);
            console.log(true);
            return true;
        }
        else {
            hashtable[arr[i]] = true;
        }
    }
    console.log(hashtable);
    console.log(false);
    return false;
};
ContainesDuplicate(nums);
