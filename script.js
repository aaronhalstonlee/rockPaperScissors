function computerPlay(){
    play = ['rock', 'paper', 'scissors']
    return play[Math.round(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    player = playerSelection.toLowerCase();
    if (player=='rock'&&computerSelection=='paper'){
        return 'You lose! Paper beats Rock!'
    } else if(player=='paper'&&computerSelection=='scissors'){
        return 'You lose! Scissors beats Paper'
    } else if ()
}

const playerSelection = 'paper';
const computerSelection = computerPlay();