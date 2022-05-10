function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let output:boolean[]=[];
    let maxCandy:number = Math.max(...candies);
    for(let i:number=0;i<candies.length;i++){
        if(candies[i]+extraCandies >=maxCandy )
            output.push(true);
        else{
            output.push(false);
        }
    }
    return output;
};