//for loop
// for(i=1;i<=10;i++){
//     //console.log(i)
//     console.log("swanu");
// }

// let sum=0;
// for(i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);

//**while loop**//
// let i=1;
// while(i<=5){
//     console.log(i);
//    // console.log("clg");
//     i++;
// }

//**do-while loop**//

// let i=1;
//  do{
//     console.log("clg");
//     i++;
//  }while(i<=5);


//**for-of loop**//

// let str="javscript ";
// for(let i of str){
//     console.log(i);
// }

// let str="javscript ";
// let size=0;
//    for(let i of str){
//     console.log(i);
//     size++;
//   }
//   console.log("size",size);


//**for-in loop**//
let stud= {
    name:"sanu",
    age:18,
    no:19,
};

for (let key in stud) {
    console.log("key=",key,",value=",stud[key]);
}

