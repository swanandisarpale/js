 function myfunction(){
    console.log("clg");
    console.log("we are learning js")
 }
 myfunction();//call or invoke 
 //myfunction();//2 times call

function message(msg){//parameter
console.log(msg);
}
message("js");//argument

//2 num sum or add
function sum(a,b){
    console.log(a+b);
}
sum(4,5);

function add(x,y){//x,y local variables
    s=x+y;
   return s;
 }
let val=add(3,4);
console.log(val);

////arrow function////
// const summ=(a,b)=>{
//    console.log(a+b);
// }
// summ(5,1);
// console.log(summ);//funcn defination is  stored here

let summ=(a,b)=>{
   console.log(a+b);
}
summ(5,1);
console.log(summ);//funcn defination is  stored here


const printhello=()=>console.log("hello");
printhello();


///////practice question /////////
function countVolwels(str){
    let count=0;
    for(let char of str){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            count++;
        }
    }
  console.log(`vowels count is ${count}`);
}
countVolwels("sanu");

