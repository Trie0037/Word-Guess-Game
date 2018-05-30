/*
Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).

If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.

Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.

*/
/*Create an array of characters*/
var characters = [
    "jonsnow",
    "khaleesi",
    "tyrion",
    "cersei",
    "bran",
    "arya",
    "sansa",
    "jamie",
    "hound",
    "mountain",
    "davos",
];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 11;
var underScore = [];
var userGuesses = [];
var randomWord = Math.floor(Math.random() * characters.length);
var chosenCharacter = characters[randomWord];
console.log(chosenCharacter);
var winCount = 0;
var remainingLetters = randomWord.length;

/*Issues remaining: 
    1) the i in Cersei and Khaleesi is allowing correct guess
        before actually typed in
    2) the underscores are not being populated with the letters chosen
    3) Guesses left not counting down properly
    4) How to make Wins/Losses work--Wrong Guesses as well
*/
    

//functions
function startGame() {
    //picks random character
    randomWord = characters[Math.floor(Math.random() * characters.length)];

    for (var z = 0; z < chosenCharacter.length; z++) {
        //underScore.push('_');
        console.log(underScore);
     //underscore = underScore + '_ ';
        underScore[z] = "_";

    }
    /* function generateUnderScore(chosenCharacter) {
         console.log(chosenCharacter);
         for (var i = 0; i < chosenCharacter.length; i++) {
             //underScore.push(" _ ");
             underscore = underScore + '_ ';*/

    //printing underscores to screen?
   // document.getElementById("underscore").textContent = underScore.join(" ");
            alert(underScore.join(" "));
    //reset
    //this.alert.wins++;
    //this.alert(losses--);
    wrongLetter = [];
    guessesLeft = 10;
    console.log(guessesLeft);

    //HTML
    guessesLeft--;
    document.getElementById('guesses-left').innerHTML = guessesLeft;
}

function winLose() {
 //   console.log(chosenCharacter.length);
    if (winCount === chosenCharacter.length) {
        alert('You Survive... this time!');
        startGame();
    
    } else if (guessesLeft === 0) {
        alert('You shall not sit on the throne!');
        startGame();
    }
}

document.onkeyup = function (event) {
    userGuesses = event.key;
    //checking to see if letter exists inside of the word
    if (chosenCharacter.indexOf(userGuesses) > -1) {
        console.log("flag");
        for (var z = 0; z < chosenCharacter.length; z++) {
            if (chosenCharacter[z] === userGuesses) {
                underScore[z] = userGuesses;
            //    console.log(underScore[z]);
                
                winCount++;
                console.log(winCount);
                winLose();
            }
        }
    } else {
        wrongLetter.push(userGuesses);
        guessesLeft--;

        winLose();
    }
}

startGame()





//Main





















/* function generateUnderScore(chosenCharacter) {
     console.log(chosenCharacter);
     for (var i = 0; i < chosenCharacter.length; i++) {
         //underScore.push(" _ ");
         underscore = underScore + '_ ';

         document.querySelector(".underscore").innerHTML = underScore;

         console.log("underScore:" + underScore.length);
         return underScore;
     }
// };

 /*function hangmanLetters(characterArr)
 for (var i = 0; i < characterArr.length; i++) {
     hangmanLetters.push('_');
 }

 for (var i = 0; i < characterArr.length; i++) {
     if (guess === characterArr[i]) {
         hangmanLetters[i] = guess
     }
 }*/

/*document.addEventListener("keypress", function (event) {
    console.log(event.key);
    var keyWord = String.fromCharCode(event.key);
     if (chosenCharacter.indexOf(keyWord) > -1) {
     correctGuess.push(keyWord);
     underScore[chosenCharacter.indexOf(keyword)] = keyWord;
     if (underScore.join('') == chosenCharacter)
     alert('You Survive!');
     }
 });















//console.log(generateUnderScore(chosenCharacter));

//document.getElementById("underScore").;
//console.log(generateUnderScore());

/*Get users guess*/
//document.addEventListener("keypress", keyPressFunction);


/*
document.addEventListener('keypress', (event) => {
    var keycode = event.keycode;
    console.log(keycode);
    var keyword = String.fromCharCode(event.keycode);

    console.log(keyword);
    console.log(chosenCharacter.indexOf(keyword));

    if (keyword.indexOf(chosenCharacter) > -1) {
        console.log(true);
    }
    //Guess.push(keyword);
   // if correct push to correct array
    underScore[chosenCharacter.indexOf(keyword)] = keyword;
    if(underScore.join("") == chosenCharacter) { 
        alert("You win!");
    };
    incorrectGuess.push(keyword);
//if incorrect push to wrong array

});

Louis Heimel (TA) [2:48 PM]
'asdfasdf'.split('')
(8) ["a", "s", "d", "f", "a", "s", "d", "f"]
characterArr = 'cersei'.split('')
(6) ["c", "e", "r", "s", "e", "i"]
hangmanLetters = []
for (var i = 0; i < characterArr.length; i++) {
 hangmanLetters.push('
VM4245:3 Uncaught SyntaxError: Invalid or unexpected token
hangmanLetters = []
for (var i = 0; i < characterArr.length; i++) {
 hangmanLetters.push('_')
}
6
hangmanLetters
(6) ["_", "_", "_", "_", "_", "_"]
guess = 'c'
"c"
for (var i = 0; i < characterArr.length; i++) {
 if (guess === characterArr[i]) {
   hangmanLetters[i] = guess
 }
}
undefined
hangmanLetters
(6) ["c", "_", "_", "_", "_", "_"]
incorrectGuess = []
function updateLetters(guess) {
   for (var i = 0; i < characterArr.length; i++) {
     if (guess === characterArr[i]) {
       hangmanLetters[i] = guess
       
     } else {
       incorrectGuess.push(guess)
     }
   }
}
 
[]
guess('r')
VM4522:1 Uncaught TypeError: guess is not a function
   at <anonymous>:1:1
(anonymous) @ VM4522:1
updateLetters('r')
undefined
hangmanLetters
(6) ["c", "_", "r", "_", "_", "_"]
updateLetters('s')
undefined
hangmanLetters
(6) ["c", "_", "r", "s", "_", "_"]
function capitalize(word) {
 return word[0].toUpperCase() + word.slice(1)
}
undefined
capitalize('a')
"A"
capitalize('arya')
"Arya"
*/






/* var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];*/