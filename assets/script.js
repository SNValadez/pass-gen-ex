// Assignment code here
// on userclick ask user if they would like numbers and letters in gen. code.
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "@"]



console.log(lowercase[0])
console.log(uppercase)
console.log(specialChar[0])



// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input


function writePassword() {
  var password = generatePassword(99);
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}
// this is a variable/parameter
function generateAlpha (letters) {
  var alphaStore = Math.floor(Math.random() * letters.length);
  console.log(alphaStore)
  console.log(letters[alphaStore])

}

function generateSpec (specials) {
  var specStore = Math.floor(Math.random() * specials.length);
  console.log(specStore)
  console.log(specials[specStore])
}




function generatePassword (max) {
  var betY;
  var charY;
  var yesY;

  charMin = 7
  charMax = 129
  var uppercaseMinCount = 3;
  var lowercaseMinCount = 3;
  var numberMinCount = 2;
  var specialCharMinCount = 2;





  var yes = window.prompt("How many characters would you like?")
  if (yes > charMin && yes < charMax) {
    charY = yes
    console.log(yes);
  } else {
    window.prompt("Please select between 8 and 128 characters.")
  }

  var numYes = confirm("Would you like numbers?")
  if (numYes == true) {
    yesY = window.prompt("How many numbers?")
    yesY = numYes
  } 

  var lettYes = confirm("Would you like letters?")
  if (lettYes == true) {
    betY = window.prompt("Would you like both uppercase and lowercase?")
    betY = lettYes 
  } else {
    betY = lettYes;
  }




  
  

 
  return Math.floor(Math.random() * max);

   
 

  alert ("Would you like letters?")
  alert ("How many characters would you like?")
 
  
  
}

// console.log(generatePassword(99));

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

generateAlpha(lowercase);
generateAlpha(uppercase);
generateSpec(specialChar);
