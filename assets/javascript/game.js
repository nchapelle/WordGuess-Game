// Define Which Words Will Be Acceptable Answers





//Event Listener (for keys pressed that coorespond with word)
$(document).ready(function(){
    $(document).on("keyup", function(){

    
    var letter = event.key.toLowerCase();
    console.log(letter);
    $(".activeGuesses").text(letter);

    // if(letter === whatgoeshere ) { //need to change whatgoeshere

    // }
    });


});

//Display # of wins

// guessme = "Nolan" = _ _ _ _ _ (press "a") _ _ _ A _

// display # of guesses remaining

// display wrong guesses (Q T P I E)

// display guesses remaining

// Choose new word after win or loss and restart game



// HARD MODE Organize your game code as an object, except for the key events to get the letter guessed. Reference Gandalf / Cargame
var wordGuess = {

    answerList: ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"],

    
}

console.log(wordGuess);
console.log(wordGuess.answerList);
// Save Whole Game and Properties in an object

// Save Functions & Metheods and call them underneat object declaration using event listeners

// Remember 1. Global Variabls 2. Objects 3.Calls

