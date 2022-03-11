// Assignment Code
//assigns generatebtn to button div in html
var generateBtn = document.querySelector("#generate");

var passLength = ""
var upper = false
var lower = false
var numeric = false
var special = false


var generatePassword = function (){

  //user input

  //notice to user of password requirements
  window.alert("You will need to select at least one type of character (uppercase,lowercase, numeric, or special) in order to generate a password. If you do not select at least one, you will need to answer all the questions again.")

  //password length condition incl variable type
  var passLength = window.prompt("Enter a password length between 8 and 128 (inclusive).");
  while ((Number.isInteger(parseInt(passLength))=== false) || (passLength < 8) || (passLength > 128)) {
    passLength = window.prompt("The length you entered is not valid, please enter a number between 8 and 128 (inclusive).");
    if ((Number.isInteger(parseInt(passLength)) === true) && (parseInt(passLength) > 7) && (parseInt(passLength) < 129)){
      break;
    }
  }

  //repeating current choice to user, changing passLength to integer for later. 
  window.alert ("Your password will be "+passLength+" characters long");
  passLength = parseInt(passLength);

  
  //while all choices are false, ask for each choice until user selects at least one.
  do { 
    //upper case choice
    upper = window.confirm("Do you want upper case characters included?");
    if (upper){
      window.alert("You have chosen to include upper case characters.");
    }
    else{
      window.alert("You have chosen NOT to include upper case characters.");
    }

    //lower case choice
    lower = window.confirm("Do you want lower case characters included?");
    if (lower){
      window.alert("You have chosen to include lower case characters.");
    }
    else{
      window.alert("You have chosen NOT to include lower case characters.");
    }

    //numeric choice
    numeric = window.confirm("Do you want numeric characters included?");
    if (numeric){
      window.alert("You have chosen to include numeric characters.");
    }
    else{
      window.alert("You have chosen NOT to include numeric characters.");
    }

    //special choice
    special = window.confirm("Do you want special characters included?")
    if (special){
      window.alert("You have chosen to include special characters.")
    }
    else{
      window.alert("You have chosen NOT to include special characters.")
    }

    //message to user that this part repeats if no options are selected
    if ((upper == false) && (lower == false) && (numeric == false) && (special == false)){
      window.alert("You have not chosen any options. Please go through the options again and select at least one.")
    }

  } while ((upper == false) && (lower == false) && (numeric == false) && (special == false)); 
 
  //password generation
  var actualCharOptions = "";
  var inputList = [upper, lower, numeric, special];
  var possibleCharOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "~`!@#$%^&*()-_+={}[]|:;/\"\'\\<>,.?"];
  var result = "";
  //generate string including all possible characters
  for (let i=0; i<4; i++){
    if (inputList[i]){
      actualCharOptions = actualCharOptions + possibleCharOptions[i];
    }
  }
  //generate password
  for (let i=0; i<(passLength-1); i++){
    result += actualCharOptions.charAt(Math.floor(Math.random() * actualCharOptions.length));
  }
return result;
}
   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

