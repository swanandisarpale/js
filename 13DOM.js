console.dir(document);
console.log(document.body);
console.dir(window);

console.dir(document.body.childNodes[1]);
console.dir("first child",document.body.firstChild);


//document.body.childNodes[1].innerText="abcd";

////dom manipulation///

//1 selecting with id
let heading=document.getElementById("heading");
console.log(heading);

//2 selecting with class
let heading2=document.getElementsByClassName("heading2");
console.dir(heading2);
console.log(heading2);

//3 selecting with tag
let para=document.getElementsByTagName("p");
console.log(para);

//4 query selector
let elements=document.querySelector("p");//first element
console.log("query selector",elements);

let all=document.querySelectorAll("p");//all elements
console.log("query selector all",all);

let c=document.querySelectorAll(".heading2");
console.log(c);

let d=document.querySelectorAll("#myid");
console.log(d);

////dom properties////

let div=document.querySelector("div");
console.log(div);
console.log(div.tagName);//tag name
console.log(div.innerText);//innertext
console.log(div.innerHTML);//innerhtml
console.log(div.textContent);//textcontent even after hidden




