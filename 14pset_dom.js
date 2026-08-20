//accessing h2 and appending
// let h2=document.querySelector("h2");
// console.log(h2);
// console.log(h2.innerText);
// h2.innerText=h2.innerText+" from my clg";//appending new string or concating
// console.log(h2.innerText);

////problem 2////
let div=document.querySelectorAll(".box");

let idx=1;
for(divs of div){
    //console.log(divs.innerText);
    divs.innerText=`new unique val ${idx}`;
    idx++;
    console.log(divs);

}
//div[0].innerText="new unique val 1";
//div[1].innerText="new unique val 2";
//div[2].innerText="new unique val 3";
//console.log(divs);

