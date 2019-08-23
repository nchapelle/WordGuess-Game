// Define Which Words Will Be Acceptable Answers


// get element by ID

//Event Listener (for keys pressed that coorespond with word) 
var userArr=[];
var wrongArr=[];
var guessesleft=5;
var wins=0;
var pokemon = ""
function start(){
    
        
    //clear out your div
    $("#GuessMe").empty();
    $("#activeGuesses").empty();
    $("#blanks").empty();
    // pokemon=randomize();
    // userArr=makeBlankArr(pokemon);
    guessesleft=5;
    $("GuessMe").text(wins)
    $("GuessMe").append("<br><hr>" + guessesleft)
    wordGuess.randomize()
    wordGuess.makeBlankArr(pokemon)
    // wrongArr=[];
}

var wordGuess = {

    answerList: [
        "bulbasaur",
        "charmander",
        "squirtle",
        "pikachu",
        "jigglypuff",
        "butterfree",
        "kingler",
        "gengar",
        "dragonite",
        "zubat"
    ],

    
    randomize: function(){
        
        var pokemon= wordGuess.answerList[Math.floor(Math.random() * 10)];
        //picks a random word from wordbank
        console.log(pokemon)
        
        wordGuess.makeBlankArr(pokemon) 
             
    },

    
    makeBlankArr: function(x){

        for(var i=0;i<x.length;i++){
            userArr.push("_ ");
        }
        // console.log(userArr)
        $("#blanks").text(userArr);
     
        return userArr;
    },      
    
    
    checkrounds: function(){
        if(guessesleft == 0){
            alert("Game Over");
            start();
        };
        if(pokemon = userArr){
            wins++;
            start();
        };
    },

    checkIfDone: function(userArr,pokemon)
    {
        var isDone=true;
        //forloop
        for(var i=0; i<pokemon.length;i++){

            if(!pokemon.includes(userArr[i])){
                return false;
            }
        }
        return isDone;
    },

    duplicates: function(arr, letter){
    var isDup=false;
    // check the letter is already in the arr
    //prob runfor loop and see if letterincludes arr[i]
    for(i=0; i<=arr.length; i++){
        if(!letter.includes(arr[i]))
        var isDup=true;
    }
    return isDup;
    },

    nextTurn: function(){
        //check onkey event letter includes pokemon;
    },
    
    replaceChar: function(userArr, letter, pokemon){
        
        for(i=0; i>=pokemon.length; i++){
        if(userArr[i].includes(letter));
        (userArr[i]=letter);
        }
    },

};

onload=start()
$(document).ready(function(){

    $(document).on("keyup", function(){

    
        var letter = event.key.toLowerCase();
        console.log(letter);
        // wordGuess.checkrounds();
        wordGuess.checkIfDone();
        wordGuess.replaceChar();
        wordGuess.duplicates();

        return letter;

    });


    // HARD MODE Organize your game code as an object, except for the key events to get the letter guessed. Reference Gandalf / Cargame
});




      
      
    
    
    //create a fx that passes in pokemon and returns the pokemon word as blanks

    
    //randomizer once pokemon is picked
    //picture to show up 
    //_ _ _ _





//userArr = _ _ _ _ _ 





    

    


    



// Save Whole Game and Properties in an object

// Save Functions & Metheods and call them underneat object declaration using event listeners

// Remember 1. Global Variables 2. Objects 3.Calls


// ​
// 	//function to handle onkey event
// 	//capture letter
// 	//make sure input is A-Z
// 	//trigger some fx
// 	//check letter = to pokemon (check if there is a next turn)
// 	//check rounds
// ​
// 	//check game is not over if no more guesses
// 	//check game is won pokemon = userArr;
