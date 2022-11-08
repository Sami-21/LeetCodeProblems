function countBalls(lowLimit: number, highLimit: number): number {
    let ballCount:any={};
    let maxBalls:number=-1;
    let digitSum:number;

    for(let i:number=lowLimit;i<highLimit+1;i++){
        digitSum = i.toString().split('').reduce((total,num) =>{ return total + Number(num);},0);
        if(ballCount[digitSum]){
            ballCount[digitSum]++;   
        }else{
            ballCount[digitSum]=1;
        }
         if(ballCount[digitSum] > maxBalls){
                maxBalls =ballCount[digitSum];
            }
    }
    return maxBalls;
};