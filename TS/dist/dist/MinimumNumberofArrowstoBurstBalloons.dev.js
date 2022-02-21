"use strict";

//----------------------------Step 1----------------------------//
// We have a groupe of ballons attached to a wall that represents our XY-plane , each ballon has a starting point and ending point of it's horizontal diameter (X_start,X_end).
// Arrows shot vertically along the X-axis can burst the ballons , if X_start < x and x < X_end
// We calculte the minimum amount of arrows to burst all ballons
//----------------------------Step 2----------------------------//
// Input : a two 2D array of integers that represents all ballons and their strating point + ending point of the horizontal diameter.
// Output : minimum arrow required to burst all ballons (an integer) 
//----------------------------Step 3----------------------------//
// According to the given problem , we are not limited to space or memory or readability . However, an average engineer will solve the problem and a great one will make a good use of everything to make the solution as efficient as possible.
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute Force / Naive Approach
var points = [[10, 16], [2, 8], [1, 6], [7, 12]];

var findMinArrowShots = function findMinArrowShots(points) {
  var TotalArrows = 0;

  while (points.length !== 0) {
    var ArrowInterval = points[0];
    points.shift();

    for (var i = 0; i < points.length; i++) {
      if (ArrowInterval[0] < points[i][0] && ArrowInterval[1] > points[i][1]) {
        ArrowInterval[0] = Math.max(ArrowInterval[0], points[i][0]);
        ArrowInterval[1] = Math.min(ArrowInterval[1], points[i][1]);
      }

      console.log(ArrowInterval);
    }

    TotalArrows++;
  }

  return TotalArrows;
};

console.log(findMinArrowShots(points));