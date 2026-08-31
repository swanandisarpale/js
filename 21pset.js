
let data="secrete info";
class user{
    constructor(name,email){
         this.name=name;
         this.email=email;
    }
    viewdata(){
        console.log("website data =", data)
    }
}
let std1=new user("sam","sam@123");
let std2=new user("ram","ram@123");

console.log(std1);
console.log(std2);
std1.viewdata();

//////error handling/////////////////

a=10;
b=20;
try{
    console.log("a+b=",a+c);
}catch(err){
    console.log(err);
}