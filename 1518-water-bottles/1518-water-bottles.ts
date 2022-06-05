function numWaterBottles(numBottles: number, numExchange: number): number {
    let DrunkBottles:number=0;
    let FullBottles:number=numBottles;
    let EmptyBottles:number=0;
    while(FullBottles > 0){
        DrunkBottles+=FullBottles;
        EmptyBottles+=FullBottles;
        FullBottles = Math.floor(EmptyBottles / numExchange);
        EmptyBottles = EmptyBottles % numExchange;
    }
    return DrunkBottles;
};