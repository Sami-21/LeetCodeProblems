function mySqrt(x: number): number {
 

  for (let i: number = 0; i <= x; i++) {
      if(i*i == x ){
          return i
      }
    if(i*i > x) {
        return i-1;
    }
  }
};