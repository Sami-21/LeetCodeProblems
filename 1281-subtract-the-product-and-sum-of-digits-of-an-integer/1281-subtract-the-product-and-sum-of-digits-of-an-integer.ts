function subtractProductAndSum(n: number): number {
let product:number=n.toString().split("").reduce((total, el) => { return total * parseInt(el)} , 1);
let sum:number=n.toString().split("").reduce((total, el) => { return total + parseInt(el)} , 0);

    return product - sum ;
};