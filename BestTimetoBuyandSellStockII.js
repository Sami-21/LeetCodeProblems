//using this approche to solve this problem  read => exemple => brute force first => code => testing my solution => code optimization 

//we are given an array of prices for a stock in an ith day . we need to find the maximum profit he can make during those days .
//exemple prices = [7,1,5,3,6,4] our net profit is 7 .
//we buy the stock when it's price is low in the second day (i=1) price[1]=1 and then we sell when it's high in the third day (i=2) price[2]=5 , now we made 4 profit
//we repeat the process with the rest of the array , we buy at thr fourth day (i=3) price[3]=3 and then we sell at the fifth day when the price is 6 making 3 profit 
//in total we made 4+3= 7 total profit   



let prices = [7,1,5,3,6,4];
let max_profit =0;

for (let i=0;i<prices.length-1;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[i] < prices[j]){

        }
    }
}
