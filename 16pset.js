let newbutton=document.createElement("button");
newbutton.innerText="click me";
newbutton.style.color="white";
newbutton.style.backgroundColor="red";

document.querySelector("body").prepend(newbutton);

//q2
let para=document.querySelector("p");
console.log(para);
//para.setAttribute("class","newclass");
para.classList.add("newclass")
//para.classList.remove("newclass")

console.log(para.getAttribute("class"));


