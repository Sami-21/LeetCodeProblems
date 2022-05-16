/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
      
    if (n == 0 || x == 1)
        return 1;
    
     let half;
          
    half = myPow(x, parseInt(n / 2));
  
    if (n % 2 == 0)
        return half * half;
    else
    {
        if (n > 0)
            return x * half * half;
        else
            return (half * half) / x;
    }
}