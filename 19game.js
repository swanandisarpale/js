let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
   const ranidx= Math.floor(Math.random()*3); // *3 will generte in range of 0 1 2
   return options[ranidx];

}

const drawgame=()=>{
    msg.innerText="game was draw";
    msg.style.bagroundColor="#310808";

}

const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log("YOU WIN");
    msg.innerText=`you win ${userchoice} beats ${compchoice}`;
    msg.style.bagroundColor="green";
}else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=` you lose ${compchoice} beats ${userchoice}`;
    msg.style.bagroundColor="red";

}
}


const playgame=(userchoice)=>{
   console.log("user choice =",userchoice);
   //generate computer choice
   const compchoice=gencompchoice();
   console.log("comp choice =",compchoice);

   if(userchoice==compchoice){
    drawgame();
   }else{
    let userwin=true;
     if(userchoice=="rock"){
        //scissors ,paper
       userwin= compchoice=="paper"  ?false :true;
     }else if(userchoice=="paper"){
        //rock,scissors
       userwin= compchoice=="scissors" ? false:true;
     }else{
        //rock,paper
       userwin=compchoice=="rock" ?false:true;
     }
     showwinner(userwin,userchoice,compchoice);
   }

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() =>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    })
})