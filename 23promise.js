const getpromise=()=>{
 return new Promise((reslove,reject)=>{
console.log("i am a promise");
reslove("success");//for then
//reject("issue");//for catch
});
};

let promise=getpromise();
promise.then((res)=>{
    console.log("promise is fuilfilled",res);
})
//console.log(promise);

promise.catch((err)=>{
    console.log("rejected",err);
})


//////////////////////////////////////////////
// function getdata(dataid,getnextdata){
//     return new promise((reslove,reject)=>{
//       setTimeout(()=>{
//             //console.log("data",dataid);
//             reslove("success")
//             if(getnextdata){
//              getnextdata();

//             }
//     },2000);
//     })
    
// }