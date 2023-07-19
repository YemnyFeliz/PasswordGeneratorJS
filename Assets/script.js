// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLenght;
var lowerCase;
var upperCase;
var number;
var specialCharacter;
var choices
var lowerCaseChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
var upperCaseChoice = ['A','B','C','D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R','S','T','U','W','X','Y','Z'];
var numberChoise = [0,1,2,3,4,5,6,7,8,9];
var specialChartacterChoice = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','/',';',":",'<','>','?',',','.','"',''];


function generatePassword() {
  passwordLenght = prompt("choose a number between 8 and 128 for password length");
 
   if(!passwordLenght) {
     alert(" you must choose a number");
   }else if(passwordLenght < 8 || passwordLenght > 128){
     passwordLenght = prompt("no less than 8 and no more than 128");
    
   }else {
     lowerCase = confirm("do you want to include lowecase letters?");
     upperCase = confirm("do you want to include uppercase letters?");
     number = confirm("do you want to include numbers?");
     specialCharacter = confirm("do you want to include special characters?");
   };

   if (!lowerCase && !upperCase && !number && !specialCharacter) {
     alert("you must choose at least one: lowercase, uppsercase, number, and or a special character. You can select more than one or all.");

     //One Choice

   }else if (lowerCase){
    choices = lowerCaseChoice;

   }else if (upperCase){
    choices = upperCaseChoice;

   }else if (number){
    choices = numberChoise;

   }else if (specialCharacter){
    choices = specialChartacterChoice;

    //Two Choices
   }else if (lowerCase & upperCase){
    choices = lowerCaseChoice + choices.upperCaseChoice;

   }else if (lowerCase & number){
    choices = lowerCaseChoice + choices.numberChoise;

   }else if

 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
