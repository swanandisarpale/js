let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a=12;
//     a++;
//     console.log(a);
// }

////event object////
btn1.onclick=(e)=>{ //event object e shownn after click
    console.log(e);
    console.log(e.type);//click type
    console.log(e.target);
    console.log(e.clientX,e.clientY);

}

let div=document.querySelector("div");
div.onmouseover=(e)=>{
    console.log(e);
    console.log(e.type);//click type
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}

///event listner////
btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked handler 1")
    console.log(evt);
    console.log(evt.type);

})

const handler2=()=>{
        console.log("button1 was clicked handler2");
};

btn1.addEventListener("click",handler2)

//btn1.removeEventListener("click",handler2)
