let h1 = document.querySelector('h1');
// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// };
// changeColor("orange",1000);
// changeColor("blue",2000);
// changeColor("green",3000);

// to over come this we use  another method

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);
};
changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000, () => {

        });
    });
});

//callback nesting call back hell