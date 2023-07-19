// Assignment Code
var generateBtn = document.querySelector("#generate");

//declared empty variables to assign them to windows objects (prompt and confirm)
var passwordLenght;
var lowerCase;
var upperCase;
var number;
var specialCharacter;

//arrays can be combine into a new one "choices" for different prompt selections
var choices
var lowerCaseChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
var upperCaseChoice = ['A','B','C','D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R','S','T','U','W','X','Y','Z'];
var numberChoice = [0,1,2,3,4,5,6,7,8,9];
var specialChartacterChoice = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','/',';',":",'<','>','?',',','.','"',''];

//Define function generatePassword()
//When click on button "generate password" users will see a prompt
function generatePassword() {
  passwordLenght = prompt("choose a number between 8 and 128 for password length");
 
  //If a number for lenght is not entered, a message will pop up
   if(!passwordLenght) {
     alert(" you must choose a number");

     //set a minimun and maximun number and a message if this condition is not met
   }else if(passwordLenght < 8 || passwordLenght > 128){
     passwordLenght = prompt("no less than 8 and no more than 128");
    
     //Once number is entered and matches criteria then users can choose at least one of the listed options
   }else {
     lowerCase = confirm("do you want to include lowecase letters?");
     upperCase = confirm("do you want to include uppercase letters?");
     number = confirm("do you want to include numbers?");
     specialCharacter = confirm("do you want to include special characters?");
   };

   //If they do not select one of the options presented after lenght then an alert instructs them to do so
   if (!lowerCase && !upperCase && !number && !specialCharacter) {
     alert("you must choose at least one: lowercase, uppsercase, number, and or a special character. You can select more than one or all.");

     //Different combinatuion of choices
     //One Choice
   }else if (lowerCase){
    choices = lowerCaseChoice;

   }else if (upperCase){
    choices = upperCaseChoice;

   }else if (number){
    choices = numberChoice;

   }else if (specialCharacter){
    choices = specialChartacterChoice;

    //Two Choices
    //.concat combines two arrays
   }else if (lowerCase & upperCase){
    choices = lowerCaseChoice.concat(upperCaseChoice);

   }else if (lowerCase & number){
    choices = lowerCaseChoice.concat(choices.numberChoise);

   }else if (lowerCase & specialCharacter){
    choices = lowerCaseChoice.concat(specialChartacterChoice);

   }else if (upperCase & number){
    choices = upperCaseChoice.concat(numberChoice);

   }else if (upperCase & specialCharacter) {
    choices =  upperCaseChoice.concat(specialChartacterChoice);

   }else if (number & specialCharacter) {
    choices = numberChoice.concat(specialChartacterChoice);

    //Three Choices
   }else if (lowerCase & upperCaseChoice & number){
    choices = lowerCaseChoice.concat(upperCaseChoice, numberChoice);

   }else if (lowerCase & upperCase & specialCharacter){
    choices = lowerCaseChoice.concat(upperCaseChoice, specialChartacterChoice);

   }else if (lowerCase & number & specialCharacter){
    choices = lowerCaseChoice.concat(numberChoice, specialChartacterChoice);

   }else if (upperCase & number & specialCharacter){
    choices = upperCaseChoice.concat(numberChoice, specialChartacterChoice);

    //All four choices
   }else if (lowerCase & upperCase & number & specialCharacter){
    choices = lowerCaseChoice.concat(upperCaseChoice, numberChoice, specialChartacterChoice);
   }

 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
