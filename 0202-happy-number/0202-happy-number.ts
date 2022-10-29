function isHappy(n: number): boolean {
    let previousResult:any = {};
    let sum:number = n;
    while(sum!==1){
        sum = sum.toString().split("").map((el) => {
        return parseInt(el);
    }).reduce((total,num) => {
        return total + num**2;
    },0) ;
        if(previousResult[sum]) return false;
        else    previousResult[sum]=true;
    } 
   
    return true 
};