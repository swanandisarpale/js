////for each loop///
let arr=[1,2,3,4,5,6];
// arr.forEach(function print(val){
//     console.log(val);
// });

// arr.forEach((val)=>{
//     console.log(val);
// });

arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

            ////practice question/////

let nums=[2,5,7,8,11];

nums.forEach((num)=>{
    console.log(num*num);//num**2 to find square
})