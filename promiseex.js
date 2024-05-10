// function saveDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// };
// saveDb("naseer", () => {
//     console.log("data saved");
// }, () => {
//     console.log("weak connection");
// });

//to over come this we use promise

function saveDb(data){
    return new Promise((sucess,failure)=>{
        let internetspeed =Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            sucess("saved!");
        }
        else{
            failure("failure");
        }
    })
}
// saveDb("naseer!");
let req=saveDb("naseer")
req.then((result)=>{
    console.log("save successfully");
    console.log(result)
    return saveDb("hello");
})
.then((result)=>{
    console.log("data 2 saved!")
    console.log(result)
})
.catch((error)=>{
    console.log(error)
    console.log("failure rejected!");
})