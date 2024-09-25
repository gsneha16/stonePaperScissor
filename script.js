let userScorepara = document.querySelector("#userScore");
let compScorepara = document.querySelector("#compScore");
let images = document.querySelectorAll(".imgs");
let msg = document.querySelector("#msg");
let restart = document.querySelector(".btn");

userScore = 0;
compScore = 0;

let newGame =() =>{
    userScorepara.innerText = 0;
    compScorepara.innerText = 0;
    msg.innerText = "Pick your move";
    msg.style.backgroundColor = "navy";
}

restart.addEventListener("click", () =>{
    newGame();
} )

let showWinner = (userWin,userChoice,compChoice) =>{
     if (userWin=== true){
        msg.innerText =`YOU WIN! Computer Choice is ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText = userScore;
     }
     else{
        msg.innerText =`YOU LOSS! Computer Choice is ${compChoice}`; 
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore;
     }
}

let userWin= true;
let findWinner =(userChoice,compChoice) =>{
    if (userChoice === "rock") {
       userWin = compChoice === "paper" ? false : true ;
    } 
    else if (userChoice === "paper") {
       userWin = compChoice === "rock" ? true : false ;
    } 
    else {
       userWin = compChoice === "paper" ? true : false ;
    } 
    showWinner(userWin,userChoice,compChoice); 
}

let winPattern = (userChoice,compChoice) =>{
    if (userChoice === compChoice){
        msg.innerText = "Game is draw";
        msg.style.backgroundColor = "navy";
    }
    else{
        findWinner(userChoice,compChoice);
    }
}

let genCompChoice = () =>{
    let compChoices = ["rock", "paper", "scissor"];
    let i = Math.floor(Math.random()*3); 
    return compChoices[i];    
}

let playGame = (userChoice)=>{
    console.log("User choice is ",userChoice);
    let compChoice = genCompChoice(); 
    console.log("Computer Choice is ", compChoice)
    winPattern(userChoice,compChoice);
}

images.forEach((imgs) => {
    imgs.addEventListener("click", () =>{
        let userChoice = imgs.getAttribute("id");
        playGame(userChoice);
    })
});