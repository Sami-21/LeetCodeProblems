
let n = 10;
const Fibonacci = (x) => {
    if(x==1 || x==2){
        return 1
    }else{
        return Fibonacci(x-1) + Fibonacci(x-2)
    }
}

console.log(Fibonacci(n))