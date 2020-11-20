// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ['~','!','@','#','$','%','^','&','*','(',')','_','+','-','=','?']


var charCount = parseInt(prompt('Pick a password length of 8-128 characters'))

if (charCount >= 8 && charCount <= 128){
var finalChars = []
}
var includeSpecial = confirm('Should password include special characters?')

var includeNumbers = confirm('Should password include numbers?')

var includeUpper = confirm('Should password include Uppercase letters?')

var includeLower = confirm('Should password include lowercase letters?')

if(includeNumbers){
  for (var i=0; i < numericNumber.length; i++){
    finalChars.push(numericNumber[i])
  }

  if(includeSpecial){
    finalChars.push(specialChar)
  }
}