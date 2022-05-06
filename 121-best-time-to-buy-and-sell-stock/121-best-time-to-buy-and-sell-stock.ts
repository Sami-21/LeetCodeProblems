const maxProfit = (prices: number[]): number => {
    // All variables
    
    let max_profit:number = 0 ,left:number=0,right:number=1;
    
    // Prices traversal
    while(right<prices.length){
        
        if(prices[left]>prices[right]){
            left = right;
            right++;
        }        
      else{
            max_profit =Math.max(max_profit,prices[right]-prices[left]);
            right++;
        }
    }

    return max_profit;
};