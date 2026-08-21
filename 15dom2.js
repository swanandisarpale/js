let div=document.querySelector("div");
console.log(div);
//attributes
let id=div.getAttribute("id");
console.log(id);
let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newclass"));
console.log(para.getAttribute("class"));

//style   node.style
console.log(div.style);
div.style.backgroundColor="purple";
div.style.fontSize="25px";
//div.style.visibility="hidden";

////insert elements////
let button=document.createElement("button");//creation of element
button.innerText="click me";
console.log(button.innerText);

//insertin g
div.append(button);
//div.prepend(button);
//div.before(button);
//div.after(button);


let newheading=document.createElement("h1");
newheading.innerHTML="hii i am new";
document.querySelector("body").prepend(newheading);


//para.remove();///deleting element





