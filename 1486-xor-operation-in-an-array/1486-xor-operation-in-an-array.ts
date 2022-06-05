function xorOperation(n: number, start: number): number {
    let start1:number = start;
    let output:number[] = [];
    for(let i:number=0;i<n;i++){
        output.push(start1);
        start1+=2;
    }
    console.log(3^5)
    return output.reduce((total , num ) => {
        console.log(total ^ num);
        return total ^ num} )
};