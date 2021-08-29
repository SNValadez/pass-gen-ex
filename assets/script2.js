let number = window.confirm("Do you want numbers?")
let upper = window.confirm("Do you want uppercase letters?")
let lower = window.confirm("Do you want lowercase letters?")
let special = window.confirm("Do you want special characters?")
let length = parseInt(window.prompt("How long do you want the password to be?"))

while (length < 8 || length > 128) {
  length = parseInt(window.prompt("The password must be between 8 and 128."))
}




let library = ''
let numbers = '123456789'
let specials = '~!@#$%^&*()_+-'
let lowers = 'abcdefghijklmnopqrstuvwxyz'
let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// // Get references to the #generate element
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)


if (number) library = library + numbers

if (upper) library = library + uppers

if (lower) library = library + lowers

if (special) library = library + specials



library = library.split('')


function randomNumberGenerator(maxNum) {
    let randomNum = Math.floor(Math.random() * maxNum);

    return randomNum;
};


let password = '';
console.log("before for loop")

for (let i=0; i<length; i++) {
    password = password + library [randomNumberGenerator(library.length)];

}


function passwordWriter() {
 
  let passwordText = document.querySelector("#password");
    passwordText.value = password;

  }

// Add event listener to generate button

generateBtn.addEventListener("click", passwordWriter);