 

Array.prototype.element = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function stringEqual(str1 , str2){
	if(str1.length != str2.length){return false ;}
	else{
			for(var i=0 ; i < str1.length ; i++){
				if(str1[i]!=str2[i]){return false ;}
				}          
		}

	return true ;
}

function toString( arr ){
 var hold = arr.toString();

 return hold.replace(/,/g, " ");


}



var words = ["football", "basketball", "baseball", "cricket" , "hockey" ];
// Declares the tallies to 0 
var j = 0;
var word = words[j];
var maxGuesses = word.length * 2  ; 
var wins = 0;
var soFar =  Array.apply(null, Array(words[j].length)).map(function(){return "_"})
var guesses = 0 ;
var guessesList = [];

var wordA = word.split("");
// When the user presses the key it records the keypress and then sets it to userguess
document.onkeydown = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
		if(j == words.length) {  
			soFar = "GAME OVER" ;
			guesses = 0 ;
			guessesList = [] ;
			guesses = 0 ;
			maxGuesses = 0 ;
			}
		else if(wordA.element(userGuess)){
			
			for(var i = 0 ; i < word.length ; i++){
				if(word[i]==userGuess){soFar[i] = userGuess ;}}
				if(guessesList.element(userGuess) == false) {guessesList.push(userGuess);}
				if (stringEqual(soFar , word)){
					j += 1;
					wins += 1;
					word = words[j];
					wordA = word.split("");
					soFar =  Array.apply(null, Array(words[j].length)).map(function(){return "_"})
					guessesList = [] ;
					guesses = 0 ;
					maxGuesses = word.length * 2 ;
				}
			}
		else{
				if(guessesList.element(userGuess) == false) {
					guessesList.push(userGuess);
					guesses += 1;
					if(maxGuesses == guesses ){
						j += 1;
						word = words[j];
						wordA = word.split("");
						soFar =  Array.apply(null, Array(words[j].length)).map(function(){return "_"})
						guessesList = [];
						guesses = 0 ;
						maxGuesses = word.length * 2 ;
					}
				}
					else { ; }
			} 
		
		var html = "<p>Enter a Letter</p>" +
		"<p>Wins: " + 
		wins + 
		"</p>" +
		"<p>Word: " + 
		toString(soFar) + 
		"</p>" +
		"<p>Guesses Remaining: " + 
		(maxGuesses - guesses )+ 
		"</p>" +
		"<p> Letters Already Guessed: " +
		toString(guessesList) +
		"</p>"



		;
		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html;
	
}
