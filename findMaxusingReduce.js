let nums=[1,2,3,4,5];
let ans=nums.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
})
console.log(ans);