let marks=[97,82,75,64];
console.log(marks);
console.log(marks.length);//proprty

let heroes=["ironman","thor","hulk","spiderman"];
console.log(heroes);
console.log(typeof marks);
console.log(marks[2]);
console.log(marks[2]=90);
console.log(marks);

//loops in array
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
//for-of loop
for(let el of heroes){
    console.log( el);
}

//practice question 1
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(`avg marks of class=${avg}`);

//p question 2
let items=[300,800,700,600];
// let idx=0;
// for(let val of items){
//     console.log(`value at index ${idx}=${val}`);
//     let offer=val/10;
//     items[idx]=items[idx]-offer;
//     console.log(`value after discount=${items[idx]}`);

//     idx++;
// }


//or method by for loop
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);

////////////////////////
//////array methods/////
/////////////////////////
console.log("-----------------methoods------------------");
console.log(heroes.push("shinchan"));
console.log(heroes);

console.log(heroes.pop());
console.log(heroes);

console.log(heroes.toString());
console.log(marks.toString());

console.log(heroes.concat(marks));

console.log(heroes.unshift("antman"));
console.log(heroes);

console.log(heroes.shift());

console.log(heroes.slice(1,4));

let arr=[1,2,3,4,5,6,7];
//console.log(arr.splice(2,2,101,102));
//console.log(arr);
console.log(arr.splice(2,0,101));///adding element
console.log(arr);
console.log(arr.splice(3));