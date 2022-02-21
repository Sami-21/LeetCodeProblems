//----------------------------Step 1----------------------------//
// We are given an array of intervals (each element is a an array of two elements [a,b] , where a and b are integers ).
// we remove any interval that is covered by other intervals .  
// example :
// [[2,3] , [2,9] , [1,3]] => [ [2,9] , [1,3] ].
// after removing all covered intervals we  return the number of remaining intervals ( array's length ).
//----------------------------Step 2----------------------------//
// Input : 2D array of integers.
// Output : integer (length of the array).
//----------------------------Step 3----------------------------//
// According to the given problem from leetcode , we are not forced to solve the problem in a particular way  .
// We assume that the main goal is to give the optimal solution by taking time and space complexity into consideration .
//----------------------------Step 4----------------------------//
// Don't be annoying , Don't ask stupid questions  
//----------------------------Step 5----------------------------//
// Brute Force / Naive Approach 
// We traverse the array and for each element we compare it with the rest and we apply this logic:
// if interval1(beginning)<= interval2(beginning) and  interval1(end) >= interval2(end) , we remove interval2 from the array . 
// if interval1(beginning)>= interval2(beginning) and  interval1(end) <= interval2(end) , we remove interval1 from the array .
// after the travesaral is complete we return the array's length.   
const removeCoveredIntervals = (intervals: number[][]): number =>  {
    for(let i:number=0;i<intervals.length-1;i++){
        for(let j:number=i+1;j<intervals.length;j++){
            if(intervals[i][0]<= intervals[j][0] && intervals[i][1]>= intervals[j][1]) intervals.splice(j,1);
            if(intervals[i][1]>= intervals[j][1] && intervals[i][1]<= intervals[j][1]) intervals.splice(i,1);
 
        }
    }
    return intervals.length;
};
console.log(removeCoveredIntervals([[1,4],[2,3]]))
//----------------------------Step 6----------------------------//
// The previous approachhad some drawbacks like the time complexity which is O(n²) 
