function computerPlay(){
    play = ['rock', 'paper', 'scissors', 'surfer', 'unicorn', 'donut', 'fire']
    return play[Math.round(Math.random()*7)]
}

function playerPoint(){
    playerScore+=1;
    //console.log(`your points: ${playerScore}`, `computer points: ${compScore}`);
}

function compPoint(){
    compScore+=1;
    //console.log(`your points: ${playerScore}`, `computer points: ${compScore}`);
}

function displayScore(){
    let playerPoints = document.querySelector('#playerScore');
    let compPoints = document.querySelector('#compScore');

    playerPoints.textContent = playerScore;
    compPoints.textContent = compScore;
    //console.log(playerPoints.textContent, compPoints.textContent);
}

function playRound(playerSelection, computerSelection, playerScore, compScore){
    if (playerSelection == 'rock'){
        switch(computerSelection){
            case 'paper':
                alert("Paper beats your Rock")
                compPoint();
                displayScore();
                break;
            case 'scissors':
                alert("Your Rock beats Scissors");
                playerPoint();
                displayScore();
                break;
            case 'surfer':
                alert("Your Rock beats Surfer");
                playerPoint();
                displayScore();
                break;
            case 'unicorn':
                alert("Unicorn beats your Rock")
                compPoint();
                displayScore();
                break;
            case 'donut':
                alert("Your Rock beats Donut");
                playerPoint();
                displayScore();
                break;
            case 'fire':
                alert("Fire beats your Rock");
                compPoint();
                displayScore();
                break;
            default:
                //console.log("Tie!") 
                alert("Tie!");
                displayScore();
        }
    } else if (playerSelection == 'paper'){
        switch(computerSelection){
            case 'rock':
                alert("Your Paper beats Rock");
                playerPoint();
                displayScore();
                break;
            case 'scissors':
                alert("Scissors beats your Paper");
                compPoint();
                displayScore();
                break;
            case 'surfer':
                alert("Surfer beats your Paper");
                compPoint();
                displayScore();
                break;
            case 'unicorn':
                alert("Your Paper beats Unicorn");
                playerPoint();
                displayScore();
                break;
            case 'donut':
                alert("Donut beats your Paper");
                compPoint();
                displayScore();
                break;
            case 'fire':
                alert("Paper beats Fire");
                compPoint();
                displayScore();
                break;
            default:
                //console.log("Tie!")
                alert("Tie!")
                displayScore();
        }
    } else if (playerSelection == 'scissors'){
        switch(computerSelection){
            case 'rock':
                alert("Rock beats your Scissors");
                compPoint();
                displayScore();
                break;
            case 'paper':
                alert("Your Scissors beats Paper");
                playerPoint();
                displayScore();
                break;
            case 'surfer':
                alert("Your Scissors beats Surfer");
                playerPoint();
                displayScore();
                break;
            case 'unicorn':
                alert("Unicorn beats Your Scissors");
                compPoint();
                displayScore();
                break;
            case 'donut':
                alert("Your Scissors beats Donut");
                playerPoint();
                displayScore();
                break;
            case 'fire':
                alert("Fire beats your Scissors");
                compPoint();
                displayScore();
                break;
            default:
                //console.log("Tie!")
                alert("Tie!");
                displayScore();
        }
    } else if (playerSelection == 'surfer'){
        switch(computerSelection){
            case 'rock':
                alert("Rock beats your Surfer");
                compPoint();
                displayScore();
                break;
            case 'paper':
                alert("Your Surfer beats Paper");
                playerPoint();
                displayScore();
                break;
            case 'scissors':
                alert("Scissors beats your Surfer");
                compPoint();
                displayScore();
                break
            case 'unicorn':
                alert("Your Surfer beats Unicorn");
                playerPoint();
                displayScore();
                break;
            case 'donut':
                alert("Your Surfer beats Donut");
                playerPoint();
                displayScore();
                break;
            case 'fire':
                alert("Fire beats your Surfer");
                compPoint();
                displayScore();
                break
            default:
                //console.log("Tie!") 
                alert("Tie!");
                displayScore();
        }
    } else if (playerSelection == 'unicorn'){
        switch(computerSelection){
            case 'rock':
                alert("Rock beats your Unicorn");
                compPoint();
                displayScore();
                break;
            case 'paper':
                alert("Paper beats your Unicorn")
                compPoint();
                displayScore();
                break;
            case 'scissors':
                alert("Your Unicorn beats Scissors");
                playerPoint();
                displayScore();
                break
            case 'surfer':
                alert("Surfer beats your Unicorn");
                compPoint();
                displayScore();
                break;
            case 'donut':
                alert("Donut beats your Unicorn");
                compPoint();
                displayScore();
                break;
            case 'fire':
                alert("Your Unicorn beats Fire");
                playerPoint();
                displayScore();
                break;
            default: 
                //console.log("Tie!")
                alert("Tie!");
                displayScore();
        }
    } else if (playerSelection == 'donut'){
        switch(computerSelection){
            case 'rock':
                alert("Rock beats your Donut");
                compPoint();
                displayScore();
                break;
            case 'paper':
                alert("Donut beats Paper")
                playerPoint();
                displayScore();
                break;
            case 'scissors':
                alert("Scissors beats your Donut");
                compPoint();
                displayScore();
                break
            case 'surfer':
                alert("Surfer beats your Donut");
                compPoint();
                displayScore();
                break;
            case 'unicorn':
                alert("Your Donut beats Unicorn");
                playerPoint();
                displayScore();
                break;
            case 'fire':
                alert("Your Donut beats Fire");
                playerPoint();
                displayScore();
                break;
            default: 
                alert("Tie!");
                displayScore();
                //console.log("Tie!")
        }
    } else if (playerSelection == 'fire'){
        switch(computerSelection){
            case 'rock':
                alert("Your Fire beats Rock");
                playerPoint();
                displayScore();
                break;
            case 'paper':
                alert("Paper beats your fire")
                compPoint();
                displayScore();
                break;
            case 'scissors':
                alert("Your Fire beats Scissors");
                playerPoint();
                displayScore();
                break
            case 'surfer':
                alert("Your Fire beats Surfer");
                playerPoint();
                displayScore();
                break;
            case 'unicorn':
                alert("Unicorn beats your Fire");
                compPoint();
                displayScore();
                break;
            case 'donut':
                alert("Donut beats your Fire");
                compPoint();
                displayScore();
                break;
            default: 
                alert("Tie!");
                displayScore();
                //console.log("Tie!")
        }
    }
}

function reset(){
    let playerPoints = document.querySelector('#playerScore');
    let compPoints = document.querySelector('#compScore');

    clicks=0;
    playerScore=0;
    compScore=0;
    playerPoints.textContent=0;
    compPoints.textContent=0;
    displayScore();
}
function game(playerSelection, playerScore, compScore){
    clicks += 1;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection, playerScore, compScore);
}
let clicks = 0;
let playerScore= 0;
let compScore = 0;
document.addEventListener('click', function(e){
    e.preventDefault;
    if (clicks < 3) {
        let playerSelection = e.target.alt;
        game(playerSelection, playerScore, compScore)
        //console.log('clicks: ', clicks);
        if(clicks == 3){
            playerScore == compScore ? alert("Tie!") : playerScore > compScore ? alert("You Win!") : alert("You Lose!")
            let answer = window.confirm("Play again?")
            
            if (answer) {
                reset();
            } else {
                alert("chicken");
                reset();
            }
        }
    } 
})

window.addEventListener('load', () => {
    const intro = document.querySelector('.intro');
    const gameContainer = document.querySelector('.gameContainer');
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    setTimeout(() => {
        intro.classList.toggle('hidden');
        gameContainer.classList.toggle('hidden');
        score.classList.toggle('hidden');
    }, 3000);
})