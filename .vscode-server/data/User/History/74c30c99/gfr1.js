let num;
let userName;
let guess;
let arrOfGuesses = [];
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
    guess = prompt('Hello ' + userName + ', guess a number between 1 and 100!');
    numOfGuesses++;
    addPersonTocurrentPlayersCount(userName, numOfGuesses);
}

function play(){
    gameSetup()
    
    while (guess != num){
        if (guess < 1 || guess > 100){
            alert('Keep it between 1 and 100!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ', I said between 1 and 100. Try again!');
            numOfGuesses++;
            currentPlayersCount[userName] = numOfGuesses;
            }
        else if (guess < num){
            alert('To low!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ' thats to low! Try again!');
            numOfGuesses++;
            currentPlayersCount[userName] = numOfGuesses;
            }
        else if (guess > num){
            alert('To high!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ' thats to high! Try again!');
            numOfGuesses++
            currentPlayersCount[userName] = numOfGuesses;
            }
        else {
            alert('Invalid!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ' thats an invalid entry. Try again!');
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
        if (previousPlayersCount[userName] > currentPlayersCount){
            alert(`Great work ${userName}! You guessed it in ${previousPlayersCount[userName] - currentPlayersCount[userName]} less guesses than your last attempt!`)
        }
        else if (previousPlayersCount[userName] === currentPlayersCount[userName]) {
            alert(`You got it ${userName}! It took you the same amount of guesses as last time.`)
        }
        else{
            alert(`You got it ${userName}! It took you ${currentPlayersCount[userName] - previousPlayersCount[userName]} more guesses this time.`)
        }
    }
    playAgain()

    // if (arrOfGuesses.length === 0){
    //     alert('Correct ' + userName + '! You got it on the first try!');
    // }
    // else{
    //     alert('Thats correct ' + userName + '! Your previous guesses were ' + arrOfGuesses.join(', ') + '!' );
    // }
    // console.log(currentPlayersCount)
    // playAgain();
}

function playAgain(){
    let yesOrNo = prompt('Would you like to play again?')
    while (yesOrNo != 'Yes' && yesOrNo != 'No'){
        yesOrNo = prompt('Yes or No')
    }
    if (yesOrNo == 'Yes'){
        play()
    }
    else if (yesOrNo == "No"){
        alert(`Okay ${userName}, have a nice day!`)
    }
}
