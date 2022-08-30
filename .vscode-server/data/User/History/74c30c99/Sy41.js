play(); // This is your main function that runs when the page loads

function play(){
    let num = Math.floor(Math.random() * 100) + 1
    let guess = prompt("Welcome to the guessing game, guess a number between 1 and 100!")
    let count = 0
    while (guess != num){
        if (guess < 1 || guess > 100){
            guess = prompt('Silly goose, I said between 1 and 100. Try again!')
            count++
            }
        else if (guess < num){
            guess = prompt('To low! Try again!')
            count++
            }
        else if (guess > num){
            guess = prompt('To high! Try again!')
            count++
            }
        else {
            guess = prompt('Invalid entry. Try again!')
            count++
            }
        }
    
    if (count === 1){
        alert('Correct! You got it on the first try!')
    }
    else{
        alert('Correct! It only took you ' + count + ' tries!' )
    }
    playAgain()
}

function playAgain(){
    
}
