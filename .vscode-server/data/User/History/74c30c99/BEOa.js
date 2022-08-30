play(); // This is your main function that runs when the page loads

function play(){
    let num = Math.floor(Math.random() * 100) + 1
    let guess = prompt("Welcome to the guessing game, guess a number between 1 and 100!")
    let count = 0
    let arrOfGuesses = []
    while (guess != num){
        if (guess < 1 || guess > 100){
            guess = prompt('Silly goose, I said between 1 and 100. Try again!')
            count++
            arrOfGuesses.push(guess)
            }
        else if (guess < num){
            guess = prompt('To low! Try again!')
            count++
            arrOfGuesses.push(guess)
            }
        else if (guess > num){
            guess = prompt('To high! Try again!')
            count++
            arrOfGuesses.push(guess)
            }
        else {
            guess = prompt('Invalid entry. Try again!')
            count++
            arrOfGuesses.push(guess)
            }
        }
    
    if (count === 1){
        alert('Correct! You got it on the first try!')
    }
    else{
        alert('Correct! Your previous guesses were ' + arrOfGuesses.join(', ') + '!' )
    }
    // playAgain()
}

// function playAgain(){
    
// }
