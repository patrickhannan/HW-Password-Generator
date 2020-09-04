// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = Math.round(parseInt(prompt("How many characters would you like your password to contain? You must choose a whole number between 8 and 128")));
  var pwlowercase = ["abcdefghijklmnopqrstuvwxyz"];
  var pwuppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var pwnumber = ["1234567890"];
  var pwspecial = ["`~!@#$%^&*()_+-=][|}{;:'<>?,./"];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);