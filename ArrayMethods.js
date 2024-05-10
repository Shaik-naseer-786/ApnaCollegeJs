let arr=[1,2,2,4,4,5,6,6];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
// })
// for (const i of arr) {
//     console.log(i);
// }
// arr.forEach((n)=>{
//     console.log(n);
// })

// let double=arr.map((el)=>{
//     return el*2;
// })
// double.forEach((n)=>{
//     console.log(n);
// })

// let even=arr.filter((n)=>(n%2==0))
// even.forEach((e)=>{
//     console.log(e);
// })

// console.log(arr.every((n)=>n%2==0));
// console.log(arr.some((n)=>n%2==0));
 let a1=[1,2,3,4,5];
 let f=a1.reduce((res,el)=>res+el);
 console.log(f);