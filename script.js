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
  var upperCaseButton = document.getElementById("uppercase");
  var lowerCaseButton = document.getElementById("lowercase");
  var numericCaseButton = document.getElementById("numeric");
  var specialCaseButton = document.getElementById("special-characters");  

  passwordCriteria.addEventListener("submit", constructPassword);

//submits password preferences and writes new password
function constructPassword(event) {
    event.preventDefault();
    var possibleCharacters = [];
    var newPassword = [];
    
    //adds character arrays to possibleCharacters array
    if ((upperCaseButton.checked || lowerCaseButton.checked || numericCaseButton.checked || specialCaseButton.checked) == false){
      alert("You must select at least one kind of character!");}
    if (upperCaseButton.checked) {possibleCharacters.push(upperCasedCharacters);}
    if (lowerCaseButton.checked) {possibleCharacters.push(lowerCasedCharacters);}
    if (numericCaseButton.checked) {possibleCharacters.push(numericCharacters);}
    if (specialCaseButton.checked) {possibleCharacters.push(specialCharacters);}

    //iterates through the 2d array of possible characters 
    for(var i = 0; i < characterButton.value; i++){
      var rndIndex = Math.floor(possibleCharacters.length*Math.random());
      var psblCharRndIndex = possibleCharacters[rndIndex];
      var rndCharacter = Math.floor(psblCharRndIndex.length*Math.random());
      newPassword.push(possibleCharacters[rndIndex][rndCharacter]);
    }
    //closes form, returns button
    generateBtn.style.display="block";
    generateBtn.style.textAlign="center";
    passwordCriteria.style.display ="none";

    //sets password and passwordText
    password = newPassword.join('');
    passwordText.value = password.toString();
    

    //resets values
    var possibleCharacters = [];
    var newPassword = [];
  }

}

//listens for generate button click
generateBtn.addEventListener("click", passwordForm);



