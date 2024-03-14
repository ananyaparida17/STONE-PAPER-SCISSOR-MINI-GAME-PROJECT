let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); 
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw!.play again";
    msg.style.backgroundColor="midnightblue";
};

const showwinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`you lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const genCompChoice=()=>{
    const option=["stone", "paper", "scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
};

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const CompChoice=genCompChoice();
    console.log("comp choice=",CompChoice);
    if(userChoice===CompChoice){
        drawGame();

    } else {
        let userWin =true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=CompChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissor
            userWin=CompChoice==="scissor"?false:true;
        }
        else{
            //rock,paper
            userWin=CompChoice==="rock"?false:true;
        }
            showwinner(userWin,userChoice,CompChoice);
    }

}

choices.forEach((choice) => {
    
    choice.addEventListener("click" , () =>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
    
});









 
/*choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () =>{
        console.log("choice was clicked");
    });
    
});*/

