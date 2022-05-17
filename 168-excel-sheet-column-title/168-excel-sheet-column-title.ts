function convertToTitle(columnNumber: number): string {
let n:number = columnNumber;
    let result:string = ""; 
            while(n >=1){
                n--;
            result += String.fromCharCode((n%26)+65);
            n = n/26;
        }
    return result.split("").reverse().join("");
};