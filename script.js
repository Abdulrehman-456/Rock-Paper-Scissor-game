let userScore = 0;
let compScore = 0;



// let user = document.querySelector("#user");
// let computer = document.querySelector("computer");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game was draw.Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice,computer)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You are Win your ${userChoice} beat ${computer}`;
        msg.style.backgroundColor = "green";
    }else{
       compScore++;
      compScorePara.innerText = compScore;
        
        msg.innerText = `You lose. ${computer} beat your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = ()=>{
    const option = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
}

const playGame = (userChoice)=>{
//    
   //comp choice
   const computer = genCompChoice();
  

   if(userChoice === computer){
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
        //paper, scissor
       userWin = computer === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        //rock ya phir scissor kun computer ke bas do hi choice bachti hain
      userWin = computer === "scissor" ? false : true;
    }else{
       userWin = computer === "rock" ? false : true;
    }
    showWinner(userWin, userChoice,computer);
}

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("Id");
    playGame(userChoice);
   });
});