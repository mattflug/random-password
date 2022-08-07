// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you clicked");

  var prompt1 = prompt(
    "Please select a password at least 8 and no more than 128 characters."
  );

  var prompt2 = prompt("Will your password include lower case characters?");
  // display to page

  var prompt3 = prompt("Will your password include upper case characters?");

  var prompt4 = prompt("Will your password include numeric characters?");

  var prompt5 = prompt("Will your password include special characters?");

  return "Please select at least one criteria prompt.";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
//   // prompt user for lenght
//   var input = prompt(
//     "Please select a password at least 8 and no more than 128 characters."
//   );
//   if input > 7 && < 129

// prompt user to confirm character choices
// generate the password using user input
// return the generated password

//   return password;
// }
