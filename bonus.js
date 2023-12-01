let magicNumber = Math.random(101);
let guess = 0;
let correctGuess = false;

while(correctGuess === false){
    guess = prompt("What is your guess")
    if(guess < magicNumber - 10) console.log("Too low!");
    else if(guess > magicNumber + 10) console.log("Too high!");
    else if((guess < magicNumber && guess >= magicNumber - 10) || (guess > magicNumber && guess <= magicNumber + 10)) console.log("Getting warmer!");
    else {
        console.log(`Congratulations! You correctly guess the correct number of ${magicNumber}`);
        correctGuess = true;
    };
}