function totalMoney(n: number): number {
    let sum:number=0;
    let i:number=0;
    while(i<Math.floor(n/7)){
        sum+= 28 + (7 * i);
        i++;
    }
    for(let j:number=1;j<=n%7;j++){
        sum+= j + i;
    }
    return sum;
};