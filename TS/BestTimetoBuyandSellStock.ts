//----------------------------Step 1----------------------------//
// we are given the price of a stock in a certain consecutive days .
// we need to calculate  the maximum profit that can be made during these days.
// we return 0 if we can't make any profit
//----------------------------Step 2----------------------------//
// Input : array of integers (represents the price of the stock)
// output : maximum profit (return 0 if we can't make profit)  
//----------------------------Step 3----------------------------//
// We assume our main goal is speed and readability .
//----------------------------Step 4----------------------------//
// don't be annoying
//----------------------------Step 5----------------------------//
// Brute Force / Naive approach
// we simply use two nested loops . one loop to traverse all prices the other loop is to compare the current price with price in the next days. 
// When looping and comparing we store the max difference in a variable (the variable is initialized as 0) , we call it max_profit
// After all the above we simply return max_profit
//----------------------------Step 6----------------------------//
// This is clearly not the best approach , because our goal is speed and readability .
// Looking at the previous solution we deduce that the time complexity is O(n²) , beside that our code is a little bit messy  
//----------------------------Step 7----------------------------//
// Alternative approach
// We can use two pointer left and right (right points to the days we want to buy the stock and left points to the day we want to sell), we also initialize max_profit equals 0 .
// At the beginning we set left = 0 and right = 1 , and now according to prices[left] and prices[right] values we do :
// If prices[left] > prices[right] we set left = right and right ++ .
// If prices[left] <= prices[right] we set max_profit = the max between prices[left] - prices[right] nad max_profit , also we increment right by one.
// The steps above are repeated while right less the array's length.
// This kind of traversal will change our time complexity from O(n²) to O(n).
//----------------------------Step 8----------------------------//
// code walk through
//----------------------------Step 9----------------------------//
// The code
 let prices:number[] =[7,4,5,3,6,8,9]

const maxProfit = (prices: number[]): number => {
    // All variables
    let max_profit:number = 0 ,left:number=0,right:number=1;
    while(right<prices.length){
        if(prices[left]>prices[right]){
            left = right;
            right++;
        }
        if(prices[left]<=prices[right]){
            max_profit =Math.max(max_profit,prices[right]-prices[left]);
            right++;
        }
    }

    return max_profit;
};
console.log(maxProfit(prices));