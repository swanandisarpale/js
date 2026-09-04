const URL="https://meowfacts.herokuapp.com/";
// let promise = fetch(URL);
// console.log(promise);

const getfacts=async()=>{
     console.log("getting data...");
    let response=await fetch(URL);
    console.log(response);//json format
    let data= await response.json();
    console.log(data);
}
    getfacts();
