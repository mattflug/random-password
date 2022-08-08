// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
// creating array of lowercase variables
var upperCase = [
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
// creating array of lowercase variables
var lowerCase = [
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
//creating array of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//creating array of special characters
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "=",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "'",
  "{",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  // var password will be equal to generatePassword()
  var password = generatePassword();
  //var passwordText will equal HTML id, #password
  var passwordText = document.querySelector("#password");
  // var passwordText will equal
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var prompt1 = prompt(
    "Please select a password at least 8 and no more than 128 characters."
  );

  if (prompt1 < 8 || prompt1 > 128) {
    alert("Password needs to be between 7 and 129.");

    return null;
  }

  var prompt2 = confirm("Will your password include lower case characters?");

  var prompt3 = confirm("Will your password include upper case characters?");

  var prompt4 = confirm("Will your password include numeric characters?");

  var prompt5 = confirm("Will your password include special characters?");

  if (
    prompt2 == false &&
    prompt3 == false &&
    prompt4 == false &&
    prompt5 == false
  ) {
    alert("You must select at least one character choice");

    return null;
  }
  // slectedVariables has one random value from each of the chosen variable types
  var selectedVariables = [];
  var randomGen = [];
  var passwordArray = [];

  //doing math.random on the
  if (prompt2 == true) {
    selectedVariables.push(
      lowerCase[Math.floor(Math.random() * lowerCase.length)]
    );
    console.log(prompt2);
    randomGen = randomGen.concat(lowerCase);
  }
  if (prompt3 == true) {
    selectedVariables.push(
      upperCase[Math.floor(Math.random() * upperCase.length)]
    );
    console.log(prompt3);
    randomGen = randomGen.concat(upperCase);
  }
  if (prompt4 == true) {
    selectedVariables.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(prompt4);
    randomGen = randomGen.concat(numbers);
  }

  if (prompt5 == true) {
    selectedVariables.push(special[Math.floor(Math.random() * special.length)]);
    console.log(prompt5);
    randomGen = randomGen.concat(special);
  }

  for (i = 0; i < prompt1; i++) {
    passwordArray.push(randomGen[Math.floor(Math.random() * randomGen.length)]);
    console.log("Password: " + passwordArray);
  }
  //displays amount of variables depending on selected length
  for (var a = 0; a < selectedVariables.length; a++) {
    passwordArray[a] = selectedVariables[a];
    console.log(passwordArray);
  }

  return passwordArray.join("");
}
