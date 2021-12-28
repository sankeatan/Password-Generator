// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var password = '';
var passwordText = document.querySelector("#password");

// opens up password form
function passwordForm() {
  var passwordCriteria = document.getElementById("password-criteria");
  passwordCriteria.style.display ="block";
  generateBtn.style.display = "none";
  var characterButton = document.getElementById("charNumber");

  var numberOfCharacters = document.getElementById("charNumber").value;
  var upperCase = document.getElementById("uppercase").checked;
  var lowerCase = document.getElementById("lowercase").checked;
  var numericCase = document.getElementById("numeric").checked;
  var specialCase = document.getElementById("special-characters").checked;  

  passwordCriteria.addEventListener("submit", constructPassword);
  characterButton.addEventListener("click", updateCharacterNumber);
  //updates number of characters
  function updateCharacterNumber(event){
    numberOfCharacters = document.getElementById("charNumber").value;
  }  

//submits password preferences and writes new password
function constructPassword(event) {
    event.preventDefault();
    var possibleCharacters = [];
    var newPassword = [];
    //adds character arrays to possibleCharacters array
    if (upperCase == 'checked') {possibleCharacters.push(upperCasedCharacters);}
    if (lowerCase == 'checked') {possibleCharacters.push(lowerCasedCharacters);}
    if (numericCase == 'checked') {possibleCharacters.push(numericCharacters);}
    if (specialCase == 'checked') {possibleCharacters.push(specialCharacters);}
    console.log(possibleCharacters);

  

    //iterates through the 2d array of possible characters 
    for(var i = 0; i < numberOfCharacters; i++){
      var rndIndex = Math.floor(possibleCharacters.length*Math.random());
      console.log(rndIndex);
      var rndCharacter = Math.floor(possibleCharacters[rndIndex].length*Math.random());
      console.log(rndCharacter);
      newPassword.push(possibleCharacters[rndIndex][rndCharacter]);
    }
    generateBtn.style.display="block";
    passwordCriteria.style.display ="none";

    //sets password and passwordText
    password = newPassword.toString();
    passwordText.value = password;
  }
  // listens for generate button click

}

generateBtn.addEventListener("click", passwordForm);



