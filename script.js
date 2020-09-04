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


  var userSelections = "";
  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
    alert("Your password can not be created. Please confirm at least one type of character.")
  } 
  if (confirmLowercase === true) {
    userSelections = userSelections.concat(pwlowercase)
  }
  if (confirmUppercase === true) {
    userSelections = userSelections.concat(pwuppercase)
  }
  if (confirmNumbers === true) {
    userSelections = userSelections.concat(pwnumber)
  }
  if (confirmSpecial === true) {
    userSelections = userSelections.concat(pwspecial)
  }

  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = randomPassword.concat(userSelections[
        Math.floor(Math.random() * userSelections.length)]
    )  
  }

  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);