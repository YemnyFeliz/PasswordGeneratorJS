//declared empty variables to assign them to windows objects (prompt and confirm)
var passwordLength;
var lowerCase;
var upperCase;
var number;
var specialCharacter;

//arrays can be combined into a new one "choices" for different prompt selections
var choices;
var lowerCaseChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
var upperCaseChoice = ['A','B','C','D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R','S','T','U','W','X','Y','Z'];
var numberChoice = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacterChoice = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','/',';',":",'<','>','?',',','.','"',''];



// Assignment Code
var generateBtn = document.querySelector("#generate");


 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


//Define function generatePassword()
function generatePassword() {
 console.log("generate function called");
//When click on button "generate password" users will see a length prompt
  passwordLength = prompt("choose a number between 8 and 128 for password length");


  //Cose was not working so used console.log in each piece to figure out the problem and fix it
 
  //If a number for lenght is not entered, a message will pop up
   if(!passwordLength){
     alert("you must choose a number");
     console.log("password link was not selected");

     //set a minimun and maximun number. A message if this condition is not met
   }else if(passwordLength < 8 || passwordLength > 128){
     passwordLength = prompt("no less than 8 and no more than 128");
     console.log("password was the wrong length");
    
     //Once number is entered and matches criteria then users can choose at least one of the listed options
   }else {
    console.log ("password length was right");
     lowerCase = confirm("do you want to include lowecase letters?");
     upperCase = confirm("do you want to include uppercase letters?");
     number = confirm("do you want to include numbers?");
     specialCharacter = confirm("do you want to include special characters?");

     
  
     console.log('islowerCase' + lowerCase);
     console.log(upperCase);
     console.log(number);
     console.log(specialCharacter);
;   };

    //If they do not select one of the options presented after lenght then an alert instructs them to do so
    if (!lowerCase && !upperCase && !number && !specialCharacter) {
      choices = alert("you must choose at least one: lowercase, uppsercase, number, and or a special character. You can select more than one or all.");

      //Different combination of choices
      //One Choice
    }if (lowerCase){
    choices = lowerCaseChoice;
    console.log (choices);
    

    }if (upperCase){
     choices = upperCaseChoice;
     console.log (choices);

    }if (number){
     choices = numberChoice;
     console.log (choices);

    }if (specialCharacter){
     choices = specialCharacterChoice;
     console.log (choices);

     //Two choices. Contact combines two arrays
    }if(lowerCase && upperCase){
     choices = lowerCaseChoice.concat(upperCaseChoice);
     console.log (choices);
     console.log(lowerCaseChoice.concat(upperCaseChoice));

    }if (lowerCase && number){
     choices = lowerCaseChoice.concat(numberChoice);
     console.log (choices);
     console.log (lowerCaseChoice.concat(numberChoice));

    }if (lowerCase && specialCharacter){
     choices = lowerCaseChoice.concat(specialCharacterChoice);
     console.log (choices);
     console.log (lowerCaseChoice.concat(specialCharacterChoice));

    }if (upperCase && number){
     choices = upperCaseChoice.concat(numberChoice);
     console.log (choices);
     console.log (upperCaseChoice.concat(numberChoice));

    }if (upperCase && specialCharacter) {
     choices = upperCaseChoice.concat(specialCharacterChoice);
     console.log (choices);
     console.log (upperCaseChoice.concat(specialCharacterChoice));

    }if (number && specialCharacter) {
     choices = numberChoice.concat(specialCharacterChoice);
     console.log (choices);
     console.log (numberChoice.concat(specialCharacterChoice));

     //Three Choices
    }if (lowerCase && upperCaseChoice && number){
     choices = lowerCaseChoice.concat(upperCaseChoice, numberChoice);
     console.log (choices);
     console.log (lowerCaseChoice.concat(upperCaseChoice, numberChoice));

    }if (lowerCase && upperCase && specialCharacter){
     choices = lowerCaseChoice.concat(upperCaseChoice, specialCharacterChoice);
     console.log (choices);
     console.log (lowerCaseChoice.concat(upperCaseChoice, specialCharacterChoice));

    }if (lowerCase && number && specialCharacter){
     choices = lowerCaseChoice.concat(numberChoice, specialCharacterChoice);
     console.log (choices);
     console.log (lowerCaseChoice.concat(numberChoice, specialCharacterChoice));

    }if (upperCase && number && specialCharacter){
     choices = upperCaseChoice.concat(numberChoice, specialCharacterChoice);
     console.log (choices);
     console.log (upperCaseChoice.concat(numberChoice, specialCharacterChoice));

     //All four choices
    }if (lowerCase && upperCase && number && specialCharacter){
     choices = lowerCaseChoice.concat(upperCaseChoice, numberChoice, specialCharacterChoice);
     console.log (choices);
     console.log (lowerCaseChoice.concat(upperCaseChoice, numberChoice, specialCharacterChoice));
    };

    //Gave an empty value to password

     var password = "";
     for(var i = 0; i < passwordLength; i++){
      var randomChoice = [Math.floor(Math.random() * choices.length)];
      password = password + choices[randomChoice];
      console.log(password);
  
    }
    return password;

  }
  
 // Write password to the #password input
 function writePassword() {
  console.log ("right writePassword is called");
  var password = generatePassword();
  console.log(password);


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 