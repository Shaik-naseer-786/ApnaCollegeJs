let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random"
// fetch(url)
// .then((result) => {
//     console.log(result);
//     // console.log(result.json());
//     result.json().then((data)=>{
//         console.log(data);
//         return fetch(url);
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }).catch((err) => {
//     console.log(err);
// });
// console.log("hello naseer!");

// async function getFact(){
//     let res= await fetch(url)
//     let data=await res.json()
//     .then((data)=>{
//         console.log(data);
//     })
// }
let b1=document.querySelector("#fact");
b1.addEventListener('click',(async ()=>{
    let f=await getFact();
    console.log(f);
    let p=document.querySelector("#result");
    p.innerText=f;
    
}));

async function getFact(){
    try{
        let res=await axios.get(url)
        return res.data.fact;
    }
    
    catch(err){
        console.log("error!")
        return "No data found"
    }
}

let b2=document.querySelector("#image");
b2.addEventListener('click',(async ()=>{
    let i=await getImage();
    console.log(i);
    let im=document.querySelector("img");
    console.dir(im);
    im.setAttribute("src",i);
}))

async function getImage(){
    try{
        let res=await axios.get(url2)
        return res.data.message;
    }
    
    catch(err){
        console.log("error!")
        return "No data found"
    }
}