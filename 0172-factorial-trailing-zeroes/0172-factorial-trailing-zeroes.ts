function trailingZeroes(n: number): number {
    let trailingZeroes:number=0;
      for(let i:number=5;n/i>=1;i*=5){
          trailingZeroes+=Math.floor(n/i);
      }
    return trailingZeroes;
};