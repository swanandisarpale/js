// console.log("hello");
// console.log("javascript")

let name="tony";
// const age=66; we cannot change const
let age=24;
age =44;
age=56;   //only this will be printed
 

price=99.99; 
x=null;
y=undefined;

console.log(name);
console.log(age);
console.log(price);
console.log(x);
console.log(y)

isfollow=true;
console.log(isfollow);


{let r=10;
 let p=5;
//  let r=6; error will occur inn same block
}
{
    let r=55;  //error will not occur
    let p=78;
}



// *** 7 datatypes***//
console.log(typeof age);
console.log(typeof name);
console.log(typeof isfollow);
console.log(typeof x);
console.log(typeof y);

let t=BigInt("123");
let e=Symbol("hellooo");
console.log(typeof t);
console.log(typeof e);
 

//object
const student={
    fullname:"sam patil",
    cgpa:9.58,
    ispass:true
};
console.log(student);
console.log( typeof student);
console.log(student["cgpa"]);
console.log(student.cgpa);

 student["fullname"]="rahul sharma";
 console.log(student.fullname);






