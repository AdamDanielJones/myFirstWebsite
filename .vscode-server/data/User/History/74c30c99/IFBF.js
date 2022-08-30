play(); // This is your main function that runs when the page loads

function play(){
    let num = Math.floor(Math.random() * 100) + 1
    let guess = prompt("Welcome to the guessing game, guess a number between 1 and 100!")
    while (guess != num){
        if (typeof guess !== 'number'){
            guess = prompt('Silly goose, thats not a number. Try again!')
        }
        else {
            if (guess < 1 || guess > 100){
                guess = prompt('Silly goose, I said between 1 and 100. Try again!')
            }
            else if (guess < num){
                guess = prompt('To low! Try again!')
            }
            else if (guess > num){
                guess = prompt('To high! Try again!')
            }
        }
    }
    alert('Correct!')
}

function playAgain(){
    
}
