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

  var numberOfCharacters = document.getElementById("charNumber").value;
  var upperCase = document.getElementById("uppercase").checked;
  var lowerCase = document.getElementById("lowercase").checked;
  var numericCase = document.getElementById("numeric").checked;
  var specialCase = document.getElementById("special-characters").checked;
  passwordCriteria.addEventListener("submit", constructPassword);
  console.log(numberOfCharacters);
  

  /*var inputSelection = document.getElementsByTagName(input);
  inputSelection.addEventListener("click", function(){
    if(this.type === "radio") {
      if (this.checked === fasle)
      {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  })*/

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

    function randomIndex (){
      var rndIndex = Math.floor(this.length*Math.random());
      return rndIndex;
    }

    //iterates through newPassword to add characters ot it.
    for(var i = 0; i < numberOfCharacters; i++){
      newPassword.push(possibleCharacters[randomIndex()][randomIndex()]);
    }
    console.log(numberOfCharacters);
    console.log(password);
    
    generateBtn.style.display="block";
    passwordCriteria.style.display ="none";

    //sets password and passwordText
    password = newPassword.toString();
    console.log(password)

    passwordText.value = password;
  }
}


// listens for generate button click
generateBtn.addEventListener("click", passwordForm);

