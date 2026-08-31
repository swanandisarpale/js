//  function hello (){
//     console.log("hello");
//  }

//  setTimeout(hello,2000); //after 2 sec timmeout  2sec=2000ms

///orrr///
setTimeout(()=>{
    console.log("hello");
},4000)//timeout

////callback////

function sum(a,b){
    console.log(a+b);
}
function calc(a,b,sumCallback){
sumCallback(a,b);
}
calc(1,2,sum);//callback


///////callback hell//////(loop nested)
function getdata(dataid,getnextdata){
    setTimeout(()=>{
            console.log("data",dataid);
            if(getnextdata){
             getnextdata();

            }
    },2000);
}

//callback hell
getdata(1,()=>{
    console.log("getting data 2...")
    getdata(2,()=>{
     console.log("getting data 3...")
        getdata(3)
    })
});