//Generate random secret number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Get the user's guess and convert to number
let guess = parseInt(prompt("Enter a number between 1 and 100:"));

// Attempts goal
let attempts = 0;

// Comparison loop - Continue until user guesses correctly
while (guess !== secretNumber) {
    attempts++; 
    
    // Check if guess is too low, too high, or correct
    if (guess < secretNumber) {
        alert("Too low. Try again.");
    } else if (guess > secretNumber) {
        alert("Too high. Try again.");
    }
    
    // Prompt for next guess after each incorrect attempt
    guess = parseInt(prompt("Enter a number between 1 and 100:"));
}

// Final attempt increment for the correct guess
attempts++;

// Handle correct guess 
// Show success message with attempt count
alert(`You guessed it! You took ${attempts} attempts.`);

// Ask if user wants to play again
const playAgain = confirm("Play again?");

// Use ternary operator to reload page 
// or show thank you message
playAgain ? location.reload() : alert("Thank you for playing!");