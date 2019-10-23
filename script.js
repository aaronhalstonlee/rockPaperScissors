var playerScore;
var compScore;

function computerPlay(){
    play = ['rock', 'paper', 'scissors']
    return play[Math.round(Math.random()*3)]
}

function playerPoint(){
    playerScore+=1;
    console.log(`your points: ${playerScore}`, `computer points: ${compScore}`);
}

function compPoint(){
    compScore+=1;
    console.log(`your points: ${playerScore}`, `computer points: ${compScore}`);
}

function playRound(playerSelection, computerSelection, playerScore, compScore){
    if (playerSelection == 'rock'){
        switch(computerSelection){
            case 'paper':
                console.log("Paper beats your Rock")
                compPoint();
                break;
            case 'scissors':
                console.log("Your Rock beats Scissors");
                playerPoint();
                break
            default: 
                console.log("Tie!");
        }
    } else if (playerSelection == 'paper'){
        switch(computerSelection){
            case 'rock':
                console.log("Your Paper beats Rock");
                playerPoint();
                break;
            case 'scissors':
                console.log("Scissors beats your Paper");
                compPoint();
                break;
            default:
                console.log("Tie!")
        }
    } else if (playerSelection == 'scissors'){
        switch(computerSelection){
            case 'rock':
                console.log("Rock beats your Scissors");
                compPoint();
                break;
            case 'paper':
                console.log("Your Scissors beats Paper");
                playerPoint();
                break;
            default:
                console.log("Tie!");
        }
    }
}

function game(int){
    playerScore=0
    compScore=0
    while(int>0){
        let playerSelection = window.prompt('rock, paper or scissors?', 'paper').toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection, playerScore, compScore);
        int--;
    }
    return playerScore>compScore ? "You win!" : "You lose!";

}

console.log(game(6));