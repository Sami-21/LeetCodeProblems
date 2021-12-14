let prices = [1,2,3,4,5]
let max_profit=0;

    // for(let i=0;i<prices.length-1;i++){
    //     if(max_profit<Math.max(...prices.slice(i))-prices[i]){
    //         max_profit=Math.max(...prices.slice(i)) -prices[i]
    //     }
    // }
  Math.max( ...prices.slice(prices.indexOf(Math.min(...prices)))) - Math.min

 console.log( Math.max(...prices) - Math.min(...prices))