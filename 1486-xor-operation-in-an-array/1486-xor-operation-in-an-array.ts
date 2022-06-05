function xorOperation(n: number, start: number): number {
    let output:number[] = [];
    for(let i:number=0;i<n;i++){
        output.push(start);
        start+=2;
    }
    return output.reduce((total , num ) => {
        return total ^ num} )
};