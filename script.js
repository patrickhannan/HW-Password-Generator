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

  if (!passwordLength) {
    alert("This value is required.")
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number of characters between 8 and 128.")
  } else {
    var confirmLowercase = confirm("Would you like your password to include lowercase letters?");
    var confirmUppercase = confirm("Would you like your password to include uppercase letters?");
    var confirmNumbers = confirm("Would you like your password to include numbers?");
    var confirmSpecial = confirm("Would you like your password to include special characters?");
  } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);