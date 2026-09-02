async function hello(){
    console.log("hello");
}
console.log(hello());

//////////////////////////


function api(){
    return new Promise((resolve,raject)=>{
       setTimeout(()=>{
         console.log("weather data");
        resolve(200);
       },2000);
    });
}
//async await
// async function getdata(){
//     await api();//1st
//     await api();//2nd
//     await api();//3rd
// }
// console.log(getdata());

//iife- immediatly invoked
(async function(){
    await api();//1st
    await api();//2nd
    await api();//3rd
})();
