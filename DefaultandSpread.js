// let sum=(a,b=5)=>{
//     return a+b;
// }
// console.log(sum(1,5))

// let nums=[1,2,3,4,5]
// console.log(...nums);
// let newarr=[...nums];
// console.log(...newarr);

// const data={
//     email:"naseer@gmail.com",
//     password:"nahdbd"
// };
// let datacopy={...data,id:123};
// console.log(datacopy);

///rest 
// function sum(...args){
//     for (let index = 0; index < args.length; index++) {
//         console.log(args[index]);
        
//     }
// }
// sum(1,2,3,4)
// function min(){
//     console.log(arguments);
// }
// min(1,2,3,4);

// function sum(...arg){
//     return arg.reduce((sum,el)=>sum+el);
// }
// console.log(sum(1,2,3,4));

function min(...args){
    return args.reduce((min,ele)=>{
        if(min<ele){
            return min;
        }
        else{
            return ele;
        }
    })
}

console.log(min(1,3,2,0));
