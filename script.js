var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ['/','~','"','!','@','#','$','%','^','&','*','(',')','_','+','-','=','?','/',':',';','<','>','`','{','|','}','[',']',"'",'.',',']

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

if(includeUpper){
    finalChars.push(uppercase)
}

if(includeLower){
  finalChars.push(lowercase)
}

var flattenedFinalChars = finalChars.flat()
var password=''

for (var i=0; i<charCount; i++){
  var randomPass= Math.floor( Math.random()* flattenedFinalChars.length)
  var randomChar= flattenedFinalChars[randomPass]
  password += randomChar
}

alert('Click generate password to view your unique password! ')

document.getElementById("generate").addEventListener("click", myFunction);
function myFunction(){
  document.getElementById("password").innerHTML= password;
}
}