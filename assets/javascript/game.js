// Define Which Words Will Be Acceptable Answers


// get element by ID


// 1. Need a working replaceChar function
// 2. Need to change photo to correspond with randomizer choice
// 3. Need to update round based on key.input 


var userArr = [];
var wrongArr = [];
var guessesleft = 5;
var wins = 0;
var pokemon = ""
var letter = ""
var pokeIMG = ""
function start() {


    //clear out your div
    console.log($("#Wins").text())
    $("#Wins #Guesses #activeGuesses #blanks").empty();
    guessesleft = 5;
    $("#Wins").text("Wins: " + wins)
    $("#Guesses").text("Guesses Left: " + guessesleft)
    userArr = [];
    wrongArr = [];
    wordGuess.randomize()
    wordGuess.makeBlankArr(pokemon)

    console.log("Yep it on")
    // wrongArr=[];
}


var wordGuess = {

    names: ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "butterfree", "kingler", "gengar", "mewtwo", "golbat"],

    images: ["assets/images/[0]bulbasaur.png", "assets/images/[1]charmander.jpg", "assets/images/[2]squirtle.jpg",
        "assets/images/[3]pikachu.jpg", "assets/images/[4]jigglypuff.jpg", "assets/images/[5]butterfree.jpg",
        "assets/images/[6]kingler.jpg", "assets/images/[7]gengar.jpg", "assets/images/[8]mewtwo.jpg", "assets/images/[9]golbat.jpg",],


    randomize: function () {
        var indexNum = Math.floor(Math.random() * 10)
        pokemon = wordGuess.names[indexNum];
        //picks a random word from wordbank
        console.log(pokemon)
        pokeIMG = wordGuess.images[indexNum]
        $("#wtp").attr("src", pokeIMG);


    },


    makeBlankArr: function (x) {

        for (var i = 0; i < x.length; i++) {
            userArr.push("_ ");
        }
        // console.log(userArr)
        $("#activeGuesses").text(userArr.join(" "));

        return userArr;
    },


    checkrounds: function () {
        if (guessesleft == 0) {
            alert("Game Over");
            start();
        };
        if (pokemon = userArr) {
            wins++;
            start();
        };
    },

    checkIfDone: function (userArr, pokemon) {
        var isDone = true;
        var userGuess = userArr.join("");

        if (pokemon === userGuess) {
             wins++
            alert("You Win!")
            start();
        }
        else {
            $("#blanks").text("Guesses Left: " + guessesleft)
            if (guessesleft === 0) {
                alert("Game Over")
                start()
            }
            


        }

    },


    nextTurn: function () {
        //check onkey event letter includes pokemon;
    },



    goodLetter: function (userArr, letter, pokemon) {


        for (i = 0; i <= pokemon.length; i++) {


            if (letter === pokemon[i]) {

                userArr[i] = letter;
                $("#activeGuesses").text(userArr)
                wordGuess.checkIfDone(userArr, pokemon);
            }
        }
    },
    badLetter: function (wrongArr, letter, pokemon) {
        wrongArr.push(letter)
        guessesleft--
        $("#Guesses").text("Guesses Left: " + guessesleft)
        $("#blanks").text(wrongArr);
        wordGuess.checkIfDone(userArr, pokemon);
    },

    duplicates: function (x, letter) {
        var isDup = false;
        // check the letter is already in the arr
        //prob runfor loop and see if letterincludes arr[i]
        for (i = 0; i <= x.length; i++) {
            if (!letter.includes(userArr[i]))
                var isDup = true;
        }
        return isDup;
    },



};

onload = start()
$(document).ready(function () {

    $(document).on("keyup", function () {


        letter = event.key.toLowerCase();
        console.log(letter);
        // wordGuess.checkrounds();
        // wordGuess.checkIfDone();
        if (pokemon.includes(letter)) {
            wordGuess.goodLetter(userArr, letter, pokemon);
        }
        else {
            wordGuess.badLetter(wrongArr, letter, pokemon)
        }
    



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
