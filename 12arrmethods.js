//array methods
//1.map//
// let num=[67,78,45];
// num.map((val)=>{
//     console.log(val);
// })


// let newarr=num.map((val)=>{///creates new array
//     return val;
// })
// console.log(newarr)

// //2.filter//
// //all even no

// let even=num.filter((val)=>{
//     return val%2==0;
// })
// console.log(`even number=${even}`);

// //3.reduce///
// let arr=[1,2,3,4];
// let output=arr.reduce((res,curr)=>{//2 parameters
//     //return res+curr;//result+current

//     return res>curr ? res:curr;//to find largest no
// });
// console.log(output);


// //practice questiion 1//
// let marks=[89,78,60,94,93];
// let topper=marks.filter((val)=>{
//     return val>90;
// });
// console.log(topper);

//queston 2//
let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;//for index
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum",sum);

let fact=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(fact);