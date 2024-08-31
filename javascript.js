function getComputerChoice(){
    let decider = Math.random() * 3;
    if (decider < 1){
        console.log(decider);
        return "rock";
        
    } else if (decider >= 1 && decider < 2){
        console.log(decider);
        return "scissors";
        
    } else {
        console.log(decider);
        return "paper";
        
    }
    
}



function getHumanChoice(){
    let humanchoice;
    humanchoice= window.prompt("Type your move");
    humanchoice.toLowerCase;
    return humanchoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    switch (humanSelection){
        case "rock": 
            if (computerSelection == "rock"){
                alert("DRAW");
            }
            if (computerSelection == "paper"){
                alert("YOU LOST");
                computerScore++;
            }
            if (computerSelection == "scissors"){
                alert("YOU WIN");
                humanScore++;
            }
        break;
        case "scissors":
            if (computerSelection == "scissors"){
                alert("DRAW");
            }
            if (computerSelection == "rock"){
                alert("YOU LOST");
                computerScore++;
            }
            if (computerSelection == "paper"){
                alert("YOU WIN");
                humanScore++;
            }
        break;
        case "paper":
            if (computerSelection == "rock"){
                alert("YOU WIN");
                humanScore++;
            }
            if (computerSelection == "paper"){
                alert("YOU DRAW");
            }
            if (computerSelection == "scissors"){
                alert("YOU LOST");
                computerScore++;
            }

    }
}

for (let i = 1; i < 6; i++){
    alert("Rodada "+ i)
    let humanSelection = getComputerChoice();
    let computerSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    alert("Pontuação da máquina: " + computerScore);
    alert("Pontuação do jogador: "+ humanScore);

}


