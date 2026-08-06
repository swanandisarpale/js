// arthmatic operators
let a=5;
let b=2;
console.log( "a+b=",a+b);
console.log( "a-b=",a-b);
console.log( "a*b=",a*b);
console.log( "a/b=",a/b);
console.log( "a%b=",a% b);
console.log( "a+b=",a+b);
console.log( "a**b=",a**b);
console.log( "predecrement a",--a);
console.log( "preincement a",++a);
console.log( "postincement a",a++);
console.log( "postdecrement a",a--);
console.log( "final a",a);

//assignment operators 
console.log( a+=1);//A=A+1
console.log( a-=1);//A=A-1 val is set to 5 for all
console.log( a/=1);//A=A/1
console.log( a*=1);//A=A*1
console.log( a**=2);//A=A**2 5^2=25

// comparision operator
console.log( "a==b",a==b);
console.log( "a!=b",a!=b);
console.log( "a>b",a>b);
console.log( "a>=b",a>=b);
console.log( "a<b",a<b);
console.log( "a<=b",a<=b);

let w=2;//number
let t="2";//string
console.log( "w==t",w==t);//will print true even if string and num
console.log("w===t", w===t);//strict will give false

console.log( "w!=t",w!=t);//will print false even if string and num
console.log( "w!==t",w!==t);//true


//logical operators
console.log( "a>b&&b<a=",a>b&&b<a);
console.log( "a>b&&b<a=",a>b&&b>a);
console.log( "a>b||b<a=",a>b||b>a);
console.log( "a<b||b>a=",a<b||b>a);
console.log( "!a<b",!a<b);
console.log( "!a>b",!a>b);

//ternary operator
//codn? true out:false out

let age=25;
let result=age>18 ? "adult":"child";
console.log(result);


//age>18 ? console.log("adult"):console.log("child");




















