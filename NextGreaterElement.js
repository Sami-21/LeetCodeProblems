let nums1= [1,3,5,2,4], nums2=[6,5,4,3,2,1,7]
let output =[]
nums1.forEach(el => {
     
    if(nums2.slice(nums2.indexOf(el)+1).find(n => n > el)){     
        output.push(nums2.slice(nums2.indexOf(el)+1).find(n => n > el))
    }else{
        output.push(-1)
    }
})
console.log(output) 
