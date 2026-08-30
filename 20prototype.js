const student={
fullname:"sanu sarpale",
marks:10,

 printmarks: function(){
    console.log("marks=",this.marks);//student.marks
 },
};
console.log(student);
console.log(student.printmarks);

//////////////////////////////////////////
const employee={
    calctax(){
        console.log("tax rate is 10%");
    },
};
//console.log(employee.calctax);
employee.calctax();
 
const karan={
    salary:50000,
    calctax(){ ///this will be alpplied not the prototype
        console.log("tax rate is 20%");
    },
 };
 karan.__proto__=employee;
 console.log(karan)

 ///////classes//////////
 console.log("///////////////class/////////////////");

 class tatacar{
    constructor(brand,milege){
        console.log("creating new constructor");
        this.brand=brand;
        this.milege=milege;
    }
  start(){
    console.log("start");
  }
  stop(){
    console.log("stop");
  }
//   setbrand(brand){
//     this.brandname=brand;
//   }
 }
 let fortuner=new tatacar("fortuner",10);//constructor
 //fortuner.setbrand("fortuner");
 let creata=new tatacar("creata",20);//constructor

 console.log(fortuner);
  console.log(creata);
   console.log(fortuner.start);
    console.log(fortuner.stop);


    ////////////////inheritance/////////////////

    class parent {
      hello(){
      console.log("hello");
      }
    }

    class child extends parent{

    }
    let obj =new child();
    //console.log(obj.hello);
    obj.hello();

    /////////////////////////////////

    class person{
      constructor(){
       console.log("enter parent constructor")
        this.species="homo sapien"
      }

      eat(){
        console.log("eat");
      }
    }

    class engg extends person{
      constructor(branch){
        console.log("enter child constructor")
        super();///to invoke parent class constructor
        this.branch=branch;
        console.log("exit child constructor")

      }
    }

    let engobj=new engg("it");