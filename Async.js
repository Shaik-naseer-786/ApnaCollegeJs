// async function greet(){
//     throw "404 Error";
//     console.log("hello world");
//     return "Hello";
// }
// greet()
// .then((result)=>{
//     console.log("hddhdb");
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// })

// let demo=async ()=>{
//     return 5;
// }

// Await 
// let h1=document.querySelector('h1');
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             if(num>3){
//                 reject("rejected!");
//             }
//             h1.style.color=color;
//             resolve("color changed");
//             console.log(`color is changed to ${color}`);
            
//         },delay)

//     })
// }

// async function demo(){
//     try{
//         await changeColor("red",1000);
//     await changeColor("green",1000);
//     }
//     catch(err){
//         console.log(err);
//         console.log("error caught!");
//     }

//     let num=9;
//     console.log(num);
// }