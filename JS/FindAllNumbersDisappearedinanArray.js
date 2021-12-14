let nums = [4,3,2,7,8,2,3,1]

const missingElements = (arr) => {
    let output =[];
for(let i=1;i<=arr.length;i++){
    if(!arr.find(el => el===i)){
        output.unshift(i)
    }
}
return output
}

console.log(missingElements(nums)) 