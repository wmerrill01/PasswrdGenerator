// Assignment Code
var generateBtn = document.querySelector("#generate");

//user variables
var numberofCharacters = "";
var specialCharsAllowed = "";
var numbersAllowed = "";
var allowUppercase = "";
var allowLowercase = "";
var passwordChars = [];

//password variables
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//prompt to ask about characters

function askHowManyCharacters(){
  var numberofCharacters = (prompt("How many characters do you want your password to be? must be between 8-128"));

  while(numberofCharacters <= 7 || numberofCharacters >= 129) {
    alert("Must be between 8 and 128 characters!")
    var numberofCharacters = (prompt("How many characters do you want your password to be? must be between 8-128"));
  }

  var specialCharsAllowed = confirm("OK to include special characters.");
  var numbersAllowed = confirm("OK to allow numbers.");
  var allowLowercase = confirm("OK to allow lowercase letters.");
  var allowUppercase = confirm("OK to allow uppercase letters.");

//Make them choose a parameter
  while(specialCharsAllowed === false && numbersAllowed === false && allowLowercase === false && allowUppercase === false) {
    alert("Choose at least one parameter.");
    var specialCharsAllowed = confirm("OK to include special characters.");
    var numbersAllowed = confirm("OK to allow numbers.");
    var allowLowercase = confirm("OK to allow lowercase letters.");
    var allowUppercase = confirm("OK to allow uppercase letters.");
  }

  if (specialCharsAllowed === true){
    passwordChars = passwordChars.concat(specialCharacters)
  }
  if (numbersAllowed === true){
    passwordChars = passwordChars.concat(numbers)
  }
  if (allowLowercase === true) {
    passwordChars = passwordChars.concat(lowercase)
  }
  if (allowUppercase === true) {
    passwordChars = passwordChars.concat(uppercase)
  }
  console.log(passwordChars)

  //I need to put the password into the document....
  var newPassword = ""

  for (var i = 0; i < numberofCharacters; i++) {
    newPassword = newPassword + passwordChars(Math.floor(Math.random() * passwordChars.length));
    console.log(newPassword)
  }
  return newPassword;


}

askHowManyCharacters();










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



