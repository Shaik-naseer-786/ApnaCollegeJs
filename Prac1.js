// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num=287152;
// let temp=num;
// let count=0;
// while(temp!=0){
//     count++;
//     temp=Math.floor(temp/10);
// }
// console.log(count);

function multiplier(factor) { 
	return function (x) { 
		return x * factor; 
	}; 
} 

const double = multiplier(2); 
const triple = multiplier(3); 
console.log(double);
console.log(double(5)); 
console.log(triple(5));
