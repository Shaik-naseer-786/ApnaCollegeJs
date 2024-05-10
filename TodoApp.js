let todo=[];

while(true){
    let req=prompt("enter a request:");
    if(req=="quit"){
        console.log("quitting todo app!");
        break;
    }
    else if(req=="list"){
        console.log("---------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------")
    }
    else if(req=="add"){
        let task=prompt("enter a task:");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("enter index to delete:");
        todo.splice(idx,1);
        console.log("task deleted!");
    }
    

}