//----------------------------Step 1----------------------------//
// We assume we are a parent and we want to give the children some cookies (one cookie at most for each child) , each child has a greed factor and each cookie has a size . to make the child content we give him the cookie with a size larger then his greed factor.
// We are given the greed factors of all children and the size of all cookies , we return the maximum amount of content children.
//----------------------------Step 2----------------------------//
// Input:  Cookies Size: array of integers and Children Greed Factor: array of integers. 
// Output: Maximum amount of content children : integer.     
//----------------------------Step 3----------------------------//
// According to the given problem named "Assign Cookies" on Leetcode , we are not constrained by anything , we assume that our goal is to make our program execute fast (time complexity).
//----------------------------Step 4----------------------------//
//              DON'T ANNOY THE INTERVIEWER MAAAAAAAAAAAAAAAN   
//----------------------------Step 5----------------------------//
// Brute Force / Naive approach 
// 
var greed = [1, 2, 3], cookies = [1, 2];
function findContentChildren(g, s) {
    var output = 0;
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < g.length; j++) {
            if (g[j] <= s[i]) {
                output++;
                g.splice(j, 1);
                s.splice(i, 1);
            }
        }
    }
    return output;
}
;
console.log(findContentChildren(greed, cookies));
