let num;
let userName;
let guess;
let arrOfGuesses = [];
let numOfGuesses = 0;
let playersCount = {};


play(); // This is your main function that runs when the page loads

function addPersonToPlayersCount(name, guesses){
    playersCount[name] = guesses;
    }

function gameSetup(){
    playersCount = {};
    num = Math.floor(Math.random() * 100) + 1;
    userName = prompt('Hello! Welcome to the guessing game. What is your name?');
    guess = prompt('Hello ' + userName + ', guess a number between 1 and 100!');
    numOfGuesses++;
    addPersonToPlayersCount(userName, numOfGuesses);
}

function play(){
    gameSetup()
    
    while (guess != num){
        if (guess < 1 || guess > 100){
            alert('Keep it between 1 and 100!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ', I said between 1 and 100. Try again!');
            numOfGuesses++;
            playersCount[userName] = numOfGuesses;
            }
        else if (guess < num){
            alert('To low!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ' thats to low! Try again!');
            numOfGuesses++;
            playersCount[userName] = numOfGuesses;
            }
        else if (guess > num){
            alert('To high!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ' thats to high! Try again!');
            numOfGuesses++
            playersCount[userName] = numOfGuesses;
            }
        else {
            alert('Invalid!');
            arrOfGuesses.push(guess);
            guess = prompt('Sorry ' + userName + ' thats an invalid entry. Try again!');
            numOfGuesses++;
            playersCount[userName] = numOfGuesses;
            }
        }
    
    if (arrOfGuesses.length === 0){
        alert('Correct ' + userName + '! You got it on the first try!');
    }
    else{
        alert('Thats correct ' + userName + '! Your previous guesses were ' + arrOfGuesses.join(', ') + '!' );
    }
    console.log(playersCount)
    playAgain();
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
