// Assignment Code
var generateBtn = document.querySelector("#generate");

//user variables
var numberofCharacters = "";
var specialCharsAllowed = "";
var numbersAllowed = "";
var allowUppercase = "";
var allowLowercase = "";
var passwordChars = "";

//password variables
var specialCharacters = "!#$%&()*+,-./\:\;<=>?@[\]^_`{|}~";
var numbers = "1234567890";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//prompt to ask about characters

function generatePassword(){
  var numberofCharacters = window.prompt("How many characters do you want your password to be? must be between 8-128");

  while(numberofCharacters <= 7 || numberofCharacters >= 129) {
    alert("Must be between 8 and 128 characters!")
    var numberofCharacters = window.prompt("How many characters do you want your password to be? must be between 8-128");
    var charAsNumber = parseInt(numberofCharacters);
  }

  var specialCharsAllowed = window.confirm("OK to include special characters.");
  var numbersAllowed = window.confirm("OK to allow numbers.");
  var allowLowercase = window.confirm("OK to allow lowercase letters.");
  var allowUppercase = window.confirm("OK to allow uppercase letters.");

//Make them choose a parameter
  while(specialCharsAllowed === false && numbersAllowed === false && allowLowercase === false && allowUppercase === false) {
    alert("Choose at least one parameter.");
    var specialCharsAllowed = window.confirm("OK to include special characters.");
    var numbersAllowed = window.confirm("OK to allow numbers.");
    var allowLowercase = window.confirm("OK to allow lowercase letters.");
    var allowUppercase = window.confirm("OK to allow uppercase letters.");
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
  
  
  var newPassword = "";

  for (var i = 0; i < numberofCharacters; i++) {

    var number = Math.floor(Math.random() * passwordChars.length);
    newPassword = newPassword + passwordChars.charAt(number);
    console.log(number)
    
    console.log(newPassword)
  }
  return newPassword;




}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



