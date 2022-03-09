// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = "1"
var upper = false
var lower = false
var numeric = false
var special = false


var password = function (){
  //user input

  //notice to user
  window.alert("You will need to select at least one type of character (uppercase,lowercase, numeric, or special) in order to generate a password. If you do not select at least one, you will need to answer all the questions again.")
  //length condition
  var length = window.prompt("Enter a password length between 8 and 128 (inclusive).")
  while (length.isInteger = false || length < 8 || length > 128) {
    length = window.prompt("The length you entered is not valid, please enter a number between 8 and 128 (inclusive).")
  }
  window.alert ("Your password will be "+length+" characters long")

  //need to select at least one type of character
  while ((upper = false) && (lower = false) && (numeric = false) && (special = false)){
  
    //upper case condition
    var upper = window.confirm("Do you want upper case characters included?")
    if (upper){
      window.alert("You have chosen to include upper case characters.")
    }
    else{
      window.alert("You have chosen NOT to include upper case characters.")
    }

    //lower case condition
    var lower = window.prompt("Do you want lower case characters included?")
    if (lower){
      window.alert("You have chosen to include lower case characters.")
    }
    else{
      window.alert("You have chosen NOT to include lower case characters.")
    }

    //numeric condition
    var numeric = window.prompt("Do you want numeric characters included?")
    if (numeric){
      window.alert("You have chosen to include numeric characters.")
    }
    else{
      window.alert("You have chosen NOT to include numeric characters.")
    }

    //special condition
    var special = window.prompt("Do you want special characters included?")
    window.alert ("You have chosen "+special+".")
    if (numeric){
      window.alert("You have chosen to include numeric characters.")
    }
    else{
      window.alert("You have chosen NOT to include numeric characters.")
    }

  //generation
  var actualCharString = ""
  var inputList = [upper, lower, numeric, special]
  var possibleCharList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "~`!@#$%^&*()-_+={}[]|:;/\"\'\\<>,.?"]
  for (let i=0; i<4; i++){
    if (inputList[i]){
      actualCharString = actualCharString + possibleCharList[i]
    }
  }
  //now need to select & combine random elements of actualcharstring to create the actual password using user inputted length.
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