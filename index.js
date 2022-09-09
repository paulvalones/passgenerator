const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!"
,"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",","
,"|",":",";","<",">",".","?",
"/"];

var passwordOne = document.querySelector("#password_one");
var passwordTwo = document.querySelector("#password_two");
var generatePassword = document.querySelector("#generate_btn");
var numCharacter = document.querySelector("#max_character");

var createdPasswordOne = [];
var createdPasswordTwo = [];

var maxCharacter;

generatePassword.addEventListener("click", function() {
    
    maxCharacter = numCharacter.value;    
    
    if(maxCharacter === "") {
        maxCharacter = 15;
    } else {
        maxCharacter = numCharacter.value;
    }


    createdPasswordOne = [];
    createdPasswordTwo = [];
    passwordOne.textContent = "";
    passwordTwo.textContent = "";


    generateRandomCharacterArray();

    for ( var i = 0; i < createdPasswordOne.length; i++ ) {
        passwordOne.textContent += createdPasswordOne[i];
        passwordTwo.textContent += createdPasswordTwo[i];
    }
})

function generateRandomCharacterArray() {
    for ( var i = 1; i <= maxCharacter; i++ ) {
        var randomIndex = Math.floor(Math.random() * characters.length)
        
        createdPasswordOne.push(characters[randomIndex]);
    }

    for ( var i = 1; i <= 15; i++ ) {
        var randomIndex = Math.floor(Math.random() * characters.length)
        
        createdPasswordTwo.push(characters[randomIndex]);
    }
}