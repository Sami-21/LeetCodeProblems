//using this approche to solve this problem  read => exemple => brute force first => code => testing my solution => solution optimization 

//we are given an array of integers , we need to find the minimum starting value so the that the sum of that value plus all elements of the array is always superior or equal 1
//for exemple [-3,2,-3,4,2] in this array we can start with 0 and keep track on the result of each addition operation so we can get the minimum value 
//in 1st iteration 0+(-3)=-3 we save -3 as the lowest result we have got this far
//2nd iteration -3+2 =-1 we notice that -3<-1 so we keep -3
//3rd iteration -1-3 =-4 we notice that -4<-3 so we keep -4
//4th iteration -4+4 =0 we notice that -4<0 so we keep -4
//5th iteration 2+0 =2 we notice that -4<2 so we keep -4
//at the end we got our minimum value = -4 
//in Order to make our values superior or equal to 1 we simply solve this equation min+x=1 => x= -min+1


let nums = [-3,2,-3,4,2]

let startValue =0

let min =1;

for(let i=0;i<nums.length;i++){
    startValue+=nums[i]
    if(startValue<min){
        min=Math.min(min,startValue)
    }
}
console.log(-min + 1)