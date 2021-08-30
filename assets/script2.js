// Questions for User Input
let num = window.confirm("Do you want numbers?")
let up = window.confirm("Do you want uppercase letters?")
let lower = window.confirm("Do you want lowercase letters?")
let special = window.confirm("Do you want special characters?")
let length = parseInt(window.prompt("How long do you want the password to be?"))

// Verify the length must be between 8 and 128 characters
while (length < 8 || length > 128) {
  length = parseInt(window.prompt("The password must be between 8 and 128."))
}

// Content for library and character sets
let library = ''
let nums = '123456789'
let specials = '~!@#$%^&*()_+-'
let lowers = 'abcdefghijklmnopqrstuvwxyz'
let ups = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// // Get references to the #generate element
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// if user agrees to use certain characters for input
if (num) library = library + nums

if (up) library = library + ups

if (lower) library = library + lowers

if (special) library = library + specials

// generate the random number
function randomNumberGenerator(maxNum) {
    let randomNum = Math.floor(Math.random() * maxNum);

    return randomNum;
};

// call the password
let password = '';
console.log("before for loop")

// identify length of library
for (let i=0; i<length; i++) {
    password = password + library [randomNumberGenerator(library.length)];

}

// reference index.html
function passwordWriter() {
 
  let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// to split the library
  library = library.split('')

// Add event listener to generate button

generateBtn.addEventListener("click", passwordWriter);