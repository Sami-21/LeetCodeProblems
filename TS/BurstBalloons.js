//----------------------------Step 1----------------------------//
// We are given an array that represents positive integers labeled on a group of ballons . We want to burst all ballons in a particular order , so that we get the maximum amount of coins.
// When we burst a ballon that have an index of i , we get ballons[i-1]*ballons[i]*ballons[i+1] coins  (if ballons[i+1] or ballons[i-1] does not exist we multiply it by 1 instead)
//----------------------------Step 2----------------------------//
// Input : Array of positive integers. 
// Output : integer (maximum amount of coins).
//----------------------------Step 3----------------------------//
// According to the given problem named "Assign Cookies" on Leetcode , we are not constrained by anything , we assume that our goal is to make our program execute fast (time complexity).
//----------------------------Step 4----------------------------//
//              DON'T ANNOY THE INTERVIEWER MAAAAAAAAAAAAAAAN   
//----------------------------Step 5----------------------------//
// Brute Force / Naive approach 
// We loop through the given array to calculate the maximum amount of coin we can get by bursting the first ballon.
// We assume the maximum we can get is 1*ballons[0]*ballons[1] (we check first if our array is not empty). With each iteration we compare our result with the previous maximum . if it is superior we set the result as our new max (and we save the index).
// after looping through all the array we simply delete the element from the array .
// the process is repeated until the array is empty.
//----------------------------Step 6----------------------------//
// The previous approach is really bad because the time complexity is O(n²) along with readability our code is a huge mess.
var ballons = [3, 1, 5, 8];
var maxCoins = function (nums) {
    if (nums.length === 0)
        return 0;
    if (nums.length === 1)
        return nums[0];
    var max = nums[0] * nums[1], index = 0;
    for (var i = 1; i < nums.length; i++) {
        var new_max = nums[i - 1] * nums[i] * nums[i + 1];
        if (i === nums.length - 1) {
            var new_max_1 = nums[i - 1] * nums[i];
        }
        if (max < new_max) {
            max = new_max;
        }
    }
    return max;
};
console.log(maxCoins(ballons));
