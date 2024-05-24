let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#you");
const compScorePara=document.querySelector("#comp");


const draw=() =>{
    msg.innerText="Draw";
    msg.style.backgroundColor = "blue";

};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const genCompChoice=() =>{
    const n=Math.floor(Math.random()*3);
    const compChoices=["rock","paper","scissors"];
    console.log(compChoices[n]);
    return compChoices[n];
};

const playGame=(userChoice) =>{
    
    const compChoice=genCompChoice();
     if(userChoice===compChoice){
        draw();
     }
     else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;

        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
     

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(choice.getAttribute("id"));
        playGame(userChoice);
    });
});