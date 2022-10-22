function isPerfectSquare(num: number): boolean {
for(let i:number=0; i * i >= 0 && i * i <= num;i++){
    if(i*i === num) return true;
}
    return false;
};