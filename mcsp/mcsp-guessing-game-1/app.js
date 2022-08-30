let num;
let userName;
let guess;
let numOfGuesses = 0;
let currentPlayersCount = {};
let previousPlayersCount = {};


play(); // This is your main function that runs when the page loads

function addPersonTocurrentPlayersCount(name, guesses){
    currentPlayersCount[name] = guesses;
}

function gameSetup(){
    numOfGuesses = 0
    currentPlayersCount = {};
    num = Math.floor(Math.random() * 100) + 1;
    userName = prompt('Hello! Welcome to the guessing game. What is your name?');
    guess = prompt(`Hello ${userName}, guess a number between 1 and 100!`);
    numOfGuesses++;
    if (currentPlayersCount[userName] === undefined){
        addPersonTocurrentPlayersCount(userName, numOfGuesses);
    }
    else {
        currentPlayersCount[userName] = numOfGuesses
    }
}

function play(){

    gameSetup()

    while (guess != num){
        if (guess < 1 || guess > 100){
            alert('Keep it between 1 and 100!');
            guess = prompt(`Sorry ${userName}, I said between 1 and 100. Try again!`);
            numOfGuesses++;
            currentPlayersCount[userName] = numOfGuesses;
        }
        else if (guess < num){
            alert('To low!');
            guess = prompt(`Sorry ${userName} thats to low! Try again!`);
            numOfGuesses++;
            currentPlayersCount[userName] = numOfGuesses;
        }
        else if (guess > num){
            alert('To high!');
            guess = prompt(`Sorry ${userName} thats to high! Try again!`);
            numOfGuesses++
            currentPlayersCount[userName] = numOfGuesses;
        }
        else {
            alert('Invalid!');
            guess = prompt(`Sorry ${userName} thats an invalid entry. Try again!`);
            numOfGuesses++;
            currentPlayersCount[userName] = numOfGuesses;
        }
    }
    
    if (previousPlayersCount[userName] === undefined){
        if (numOfGuesses > 1){
            alert(`Thats correct ${userName}! It took you ${numOfGuesses} guesses.`);
        }
        else {
            alert(`Outstanding ${userName}! You guessed it on your first try!`);
        }
        previousPlayersCount[userName] = numOfGuesses;
    }
    else{
        if (previousPlayersCount[userName] - currentPlayersCount[userName] > 1){
            alert(`Great work ${userName}! You guessed it in ${previousPlayersCount[userName] - currentPlayersCount[userName]} less guesses than your last attempt!`)
        }
        else if (previousPlayersCount[userName] - currentPlayersCount[userName] === 1){
            alert(`Great work ${userName}! You guessed it in 1 less guess than your last attempt!`)
        }
        else if (currentPlayersCount[userName] - previousPlayersCount[userName] > 1){
            alert(`You got it ${userName}! It took you ${currentPlayersCount[userName] - previousPlayersCount[userName]} more guesses this time.`)
        }
        else if (currentPlayersCount[userName] - previousPlayersCount[userName] === 1){
            alert(`You got it ${userName}! It took you 1 more guess this time.`)
        }
        else if (previousPlayersCount[userName] === currentPlayersCount[userName]) {
            alert(`You got it ${userName}! It took you the same amount of guesses as last time.`)
        }
    }
    previousPlayersCount[userName] = numOfGuesses
    console.log(previousPlayersCount)
    playAgain()
}
function playAgain(){
    let yesOrNo = prompt('Would you like to play again?')
    while (yesOrNo != 'yes' && yesOrNo != 'no'){
        yesOrNo = prompt('yes or no')
    }
    if (yesOrNo == 'yes'){
        play()
    }
    else if (yesOrNo == "no"){
        alert(`Okay ${userName}, have a nice day!`)
    }
}
