play(); // This is your main function that runs when the page loads

function play(){
    let num = Math.floor(Math.random() * 100) + 1
    let userName = prompt('Hello! Welcome to the guessing game. What is your name?')
    let guess = prompt('Hello ' + userName + ', guess a number between 1 and 100!')
    let arrOfGuesses = []
    while (guess != num){
        if (guess < 1 || guess > 100){
            alert('Keep it between 1 and 100!')
            guess = prompt('Sorry ' + userName + ', I said between 1 and 100. Try again!')
            arrOfGuesses.push(guess)
            }
        else if (guess < num){
            alert('To low!')
            guess = prompt('Sorry ' + userName + ' thats to low! Try again!')
            arrOfGuesses.push(guess)
            }
        else if (guess > num){
            alert('To high!')
            guess = prompt('Sorry ' + userName + ' thats to high! Try again!')
            arrOfGuesses.push(guess)
            }
        else {
            alert('Invalid!')
            guess = prompt('Sorry ' + userName + ' thats an invalid entry. Try again!')
            arrOfGuesses.push(guess)
            }
        }
    
    if (count === 1){
        alert('Correct ' + userName + '! You got it on the first try!')
    }
    else{
        alert('Thats correct ' + userName + '! Your previous guesses were ' + arrOfGuesses.join(', ') + '!' )
    }
    playAgain()
}

function playAgain(){
    let yesOrNo = prompt('Would you like to play again?')
    if (yesOrNo != 'Yes' && yesOrNo != 'No'){
        yesOrNo = prompt('Yes or No')
    }
    else if (yesOrNo == 'Yes'){
        play()
    }
    else if (yesOrNo == "No"){
        return 'Okay have a nice day!'
    }
}
